import ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService from "./application-for-admission-consideration-according-to-the-competence-assessment-test-result.service";

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

const ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRPC =
  {
    GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
    GetApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultByCode,
  };

export default ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRPC;
