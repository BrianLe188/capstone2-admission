import { AdmissionDB } from "../../data-source";
import { MoreThanOrEqual } from "typeorm";
import { ApplicationAdmissionRegistration } from "../application-admission-registration/application-admission-registration.entity";
import { ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult } from "../application-for-admission-consideration-according-to-the-competence-assessment-test-result/application-for-admission-consideration-according-to-the-competence-assessment-test-result.entity";
import { ApplicationForAdmissionWithAHighSchoolScript } from "../application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.entity";
import { ApplicationForStraightAdmissionAndPriorityConsideration } from "../application-for-straight-admission-and-priority-consideration/application-for-straight-admission-and-priority-consideration.entity";
import coreServiceClient from "../core";
import { MyEventEmitter } from "../../events";

const applicationAdmissionRegistrationRepo = AdmissionDB.getRepository(
  ApplicationAdmissionRegistration
);
const applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRepo =
  AdmissionDB.getRepository(
    ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult
  );
const applicationForAdmissionWithAHighSchoolScriptRepo =
  AdmissionDB.getRepository(ApplicationForAdmissionWithAHighSchoolScript);
const applicationForStraightAdmissionAndPriorityConsiderationRepo =
  AdmissionDB.getRepository(
    ApplicationForStraightAdmissionAndPriorityConsideration
  );

const AutoAccept = async (call: any, callback: any) => {
  try {
    const submajors: any = await new Promise((rs, rj) => {
      coreServiceClient.GetAllSubMajors({}, (err: any, res: any) => {
        if (err) {
          rj(err);
        }
        rs(res.submajors);
      });
    });
    const applicatiosBaseOnMajor = await Promise.all(
      submajors.data?.map(async (item: any) => {
        const group = {
          id: item.id,
          applications: (
            await Promise.all([
              await applicationAdmissionRegistrationRepo.find({
                where: {
                  subMajorId: item.id,
                  total: MoreThanOrEqual(item.cutoffPoint),
                },
                relations: {
                  candidate: true,
                },
              }),
              await applicationForAdmissionWithAHighSchoolScriptRepo.find({
                where: {
                  subMajorId: item.id,
                  total: MoreThanOrEqual(item.cutoffPoint),
                },
                relations: {
                  candidate: true,
                },
              }),
            ])
          )
            .flat()
            .sort((a: any, b: any) => b.total - a.total)
            .slice(0, item.admissionCriteria),
        };
        return group;
      })
    );
    for (const i of applicatiosBaseOnMajor) {
      const applications = i.applications;
      for (const application of applications) {
        MyEventEmitter.emit("send_mail", {
          email: application.candidate.email,
          cccd: application.candidate.cccd,
          application,
          type: "congratuation",
        });
      }
    }
    callback(null, { message: "Done" });
  } catch (error) {
    callback(null, { message: error });
  }
};

const commonRPC = {
  AutoAccept,
};

export default commonRPC;
