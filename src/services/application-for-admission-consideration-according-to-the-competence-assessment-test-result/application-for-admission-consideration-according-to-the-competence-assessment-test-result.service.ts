import { AdmissionDB } from "../../data-source";
import { Prettify } from "../../utils/types";
import { ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult } from "./application-for-admission-consideration-according-to-the-competence-assessment-test-result.entity";

const applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRepo =
  AdmissionDB.getRepository(
    ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult
  );

const create = async (req: {
  body: Prettify<
    Partial<ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult>
  >;
}) => {
  try {
    const application: any =
      new ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult();
    Object.keys(req.body).forEach((item) => {
      application[item] = req.body[item as keyof typeof req.body];
    });
    await applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultRepo.save(
      application
    );
    return application;
  } catch (error) {}
};

const ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService =
  {
    create,
  };

export default ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultService;
