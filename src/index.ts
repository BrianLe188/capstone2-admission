import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import {
  Server,
  ServerCredentials,
  loadPackageDefinition,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { PROTO_PATH } from "./protos";
import amqp from "amqplib";
import { AdmissionDB } from "./data-source";
import applyAdmissionQueue from "./queue/apply-admission";
import { ProtoGrpcType } from "./generated/admission";
import genderRPC from "./services/gender/gender.rpc";
import areaRPC from "./services/area/area.rpc";
import priorityRPC from "./services/priority/priority.rpc";
import objectRPC from "./services/object-admission/object-admission.rpc";
import notificationQueue from "./queue/notification";
import ApplicationAdmissionRegistrationRPC from "./services/application-admission-registration/application-admission-registration.rpc";
import ApplicationForAdmissionWithAHighSchoolScriptServiceRPC from "./services/application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.rpc";

const packageDefinition = loadSync(PROTO_PATH);

const service = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

async function main() {
  const server = new Server();
  server.addService(service.admission.Admission.service, {
    ...genderRPC,
    ...areaRPC,
    ...priorityRPC,
    ...objectRPC,
    ...ApplicationAdmissionRegistrationRPC,
    ...ApplicationForAdmissionWithAHighSchoolScriptServiceRPC,
  });
  if (process.env.ADMISSION_GRPC) {
    server.bindAsync(
      process.env.ADMISSION_GRPC,
      ServerCredentials.createInsecure(),
      () => {
        server.start();
        AdmissionDB.initialize()
          .then(async () => {
            const amqpConnection = await amqp.connect("amqp://127.0.0.1");
            const channel = await amqpConnection.createChannel();

            applyAdmissionQueue({ channel });
            notificationQueue({ channel });

            console.log(`Admission service is running`);
          })
          .catch((error) => {
            console.log(error);
            setInterval(() => {
              main();
            }, 1000);
          });
      }
    );
  }
}

main();
