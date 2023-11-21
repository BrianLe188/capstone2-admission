import { AdmissionDB } from "../../data-source";
import { ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult } from "./application-for-admission-consideration-according-to-the-competence-assessment-test-result.entity";
import ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService from "./application-for-admission-consideration-according-to-the-competence-assessment-test-result.service";

const applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRepo =
  AdmissionDB.getRepository(
    ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult
  );

const GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult =
  async (call: any, callback: any) => {
    try {
      const applications =
        await ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService.getAll();
      callback(null, {
        applications: {
          data: applications,
        },
      });
    } catch (error) {}
  };

const GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode =
  async (call: any, callback: any) => {
    try {
      const { code } = call.request;
      const application =
        await ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService.getByOption(
          {
            code,
            relations: {
              candidate: true,
            },
          }
        );
      callback(null, application);
    } catch (error) {}
  };

const UpdateApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult =
  async (call: any, callback: any) => {
    try {
      const { id, ...remain } = call.request;
      const application: any =
        await ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService.getByOption(
          {
            id,
          }
        );
      if (application) {
        Object.keys(remain).forEach((item: any) => {
          application[item] = remain[item];
        });
        await applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRepo.save(
          application
        );
      }
      callback(null, { message: "Done" });
    } catch (error) {}
  };

const ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRPC =
  {
    GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
    GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode,
    UpdateApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
  };

export default ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRPC;
