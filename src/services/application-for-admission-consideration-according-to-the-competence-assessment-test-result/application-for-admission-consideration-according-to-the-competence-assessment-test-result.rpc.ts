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

const ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRPC =
  {
    GetAllApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
  };

export default ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRPC;
