import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import amqp from "amqplib";
import { AdmissionDB } from "./data-source";
import applyAdmissionQueue from "./queue/apply-admission";

async function main() {
  AdmissionDB.initialize()
    .then(async () => {
      const amqpConnection = await amqp.connect("amqp://127.0.0.1");
      const channel = await amqpConnection.createChannel();
      applyAdmissionQueue({ channel });
      console.log(`Admission service is running`);
    })
    .catch((error) => {
      console.log(error);
      setInterval(() => {
        main();
      }, 1000);
    });
}

main();
