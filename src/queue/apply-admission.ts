import { Channel, Message } from "amqplib";
import ApplicationForAdmissionWithAHighSchoolScriptService from "../services/application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.service";
import CandidateService from "../services/candidate/candidate.service";

const applyAdmissionQueue = async ({ channel }: { channel: Channel }) => {
  const exchange = "admission";
  const applyQueue = "apply_admission";

  await channel.assertExchange(exchange, "direct");
  await channel.assertQueue(applyQueue);
  await channel.bindQueue(applyQueue, exchange, "apply");

  channel.consume(
    applyQueue,
    async (msg) => {
      try {
        if (msg?.fields.routingKey === "apply") {
          const { form, data } = JSON.parse(msg.content.toString());

          if (!data) {
          }

          const {
            fullName,
            avatar,
            birthday,
            birthplace,
            cccd,
            highschoolAddress,
            highschoolGraduateYear,
            phonenumber,
            email,
            permanentResidence,
            gender,
            nation,
            priority,
            area,
            addressToReceiveAdmissionNotice,
            ...rest
          } = data;

          const candidate = await CandidateService.create({
            body: {
              fullName,
              avatar,
              birthday,
              birthplace,
              cccd,
              highschoolAddress,
              highschoolGraduateYear,
              phonenumber,
              email,
              permanentResidence,
              gender,
              nation,
              priority,
              addressToReceiveAdmissionNotice,
              area,
            },
          });

          switch (form) {
            case "admission_registration": {
              break;
            }
            case "admission_with_high_school_script": {
              const {
                majorId,
                subjectOne,
                subjectOneScore,
                subjectTwo,
                subjectTwoScore,
                subjectThree,
                subjectThreeScore,
                total,
              } = rest;
              ApplicationForAdmissionWithAHighSchoolScriptService.create({
                body: {
                  candidate,
                  majorId,
                  subjectOne,
                  subjectOneScore,
                  subjectTwo,
                  subjectTwoScore,
                  subjectThree,
                  subjectThreeScore,
                  total,
                },
              });
              break;
            }
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        channel.ack(msg as Message);
      }
    },
    {
      noAck: false,
    }
  );
};

export default applyAdmissionQueue;
