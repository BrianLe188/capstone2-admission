import { Channel, Message } from "amqplib";
import ApplicationForAdmissionWithAHighSchoolScriptService from "../services/application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.service";
import CandidateService from "../services/candidate/candidate.service";
import { Candidate } from "../services/candidate/candidate.entity";
import ApplicationForStraightAdmissionAndPriorityConsiderationService from "../services/application-for-straight-admission-and-priority-consideration/application-for-straight-admission-and-priority-consideration.service";
import ObjectAdmissionService from "../services/object-admission/object-admission.service";
import ApplicationAdmissionRegistrationService from "../services/application-admission-registration/application-admission-registration.service";
import { MyEventEmitter } from "../events";
import ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService from "../services/application-for-admission-consideration-according-to-the-competence-assessment-test-result/application-for-admission-consideration-according-to-the-competence-assessment-test-result.service";

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

          let candidate = (await CandidateService.findOne({
            body: {
              cccd,
              email,
            },
          })) as Candidate | undefined;
          let application;

          if (!candidate) {
            candidate = (await CandidateService.create({
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
            })) as Candidate | undefined;
          }

          switch (form) {
            case "admission_registration": {
              const {
                school,
                schoolCode,
                majorId,
                subjectOne,
                subjectOneScore,
                subjectTwo,
                subjectTwoScore,
                subjectThree,
                subjectThreeScore,
              } = rest;
              application =
                await ApplicationAdmissionRegistrationService.create({
                  body: {
                    candidate,
                    school,
                    schoolCode,
                    majorId,
                    subjectOne,
                    subjectOneScore,
                    subjectTwo,
                    subjectTwoScore,
                    subjectThree,
                    subjectThreeScore,
                    total:
                      Number(subjectOneScore) +
                      Number(subjectTwoScore) +
                      Number(subjectThreeScore),
                  },
                });
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
              } = rest;
              application =
                await ApplicationForAdmissionWithAHighSchoolScriptService.create(
                  {
                    body: {
                      candidate,
                      majorId,
                      subjectOne,
                      subjectOneScore,
                      subjectTwo,
                      subjectTwoScore,
                      subjectThree,
                      subjectThreeScore,
                      total:
                        Number(subjectOneScore) +
                        Number(subjectTwoScore) +
                        Number(subjectThreeScore),
                    },
                  }
                );
              break;
            }
            case "admission_and_priority_consideration": {
              const { objectAdmission: objectId, majorId } = rest;
              const objectAdmission = await ObjectAdmissionService.findOne({
                body: {
                  id: objectId,
                },
              });
              if (objectAdmission) {
                application =
                  await ApplicationForStraightAdmissionAndPriorityConsiderationService.create(
                    {
                      body: {
                        candidate,
                        majorId,
                        objectAdmission,
                      },
                    }
                  );
              }
              break;
            }
            case "admission_consideration_according_to_the_competence_assessment_test_result": {
              const {
                examRegistrationApplicationCode,
                nameOfTheUniversityOrganizingTheExam,
                resultOfExam,
                majorId,
              } = rest;
              application =
                await ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService.create(
                  {
                    body: {
                      candidate,
                      examRegistrationApplicationCode,
                      nameOfTheUniversityOrganizingTheExam,
                      resultOfExam,
                      majorId,
                    },
                  }
                );
              break;
            }
          }

          if (candidate && application) {
            MyEventEmitter.emit("send_mail", {
              email: candidate.email,
              cccd: candidate.cccd,
              form,
            });
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
