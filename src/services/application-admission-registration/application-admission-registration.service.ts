import { AdmissionDB } from "../../data-source";
import { Prettify } from "../../utils/types";
import { ApplicationAdmissionRegistration } from "./application-admission-registration.entity";

const applicationAdmissionRegistrationRepo = AdmissionDB.getRepository(
  ApplicationAdmissionRegistration
);

const create = async (req: {
  body: Prettify<Partial<ApplicationAdmissionRegistration>>;
}) => {
  try {
    const application: any = new ApplicationAdmissionRegistration();
    Object.keys(req.body).forEach((item) => {
      application[item] = req.body[item as keyof typeof req.body];
    });
    await applicationAdmissionRegistrationRepo.save(application);
    return application;
  } catch (error) {}
};

const ApplicationAdmissionRegistrationService = {
  create,
};

export default ApplicationAdmissionRegistrationService;
