import dotenv from "dotenv";
dotenv.config();
import {
  Server,
  ServerCredentials,
  loadPackageDefinition,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { PROTO_PATH } from "./protos";
import { ProtoGrpcType } from "./generated/admission";
import defaultService from "./services/default";
import "reflect-metadata";
import { AdmissionDB } from "./data-source";
import moduleRPC from "./services/modules/module.rpc";

const packageDefinition = loadSync(PROTO_PATH);

const service = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

function main() {
  const server = new Server();
  server.addService(service.admission.Admission.service, {
    ...defaultService,
    ...moduleRPC,
  });
  if (process.env.ADMISSION_GRPC) {
    server.bindAsync(
      process.env.ADMISSION_GRPC,
      ServerCredentials.createInsecure(),
      () => {
        server.start();
        console.log(`Admission is running on ${process.env.ADMISSION_GRPC}`);
        AdmissionDB.initialize()
          .then(() => {
            console.log(`Admission database available`);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }
}

main();
