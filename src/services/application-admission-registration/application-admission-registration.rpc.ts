import { AdmissionDB } from "../../data-source";
import { ApplicationAdmissionRegistration } from "./application-admission-registration.entity";
import ApplicationAdmissionRegistrationService from "./application-admission-registration.service";

const applicationAdmissionRegistrationRepo = AdmissionDB.getRepository(
  ApplicationAdmissionRegistration
);

const GetAllApplicationRegistration = async (call: any, callback: any) => {
  try {
    const applications = await ApplicationAdmissionRegistrationService.getAll();
    callback(null, {
      applications: {
        data: applications,
      },
    });
  } catch (error) {}
};

const GetApplicationRegistrationByCode = async (call: any, callback: any) => {
  try {
    const { code } = call.request;
    const application =
      await ApplicationAdmissionRegistrationService.getByOption({
        code,
        relations: {
          candidate: true,
        },
      });
    callback(null, application);
  } catch (error) {}
};

const UpdateApplicationRegistration = async (call: any, callback: any) => {
  try {
    const { id, ...remain } = call.request;
    const application: any =
      await ApplicationAdmissionRegistrationService.getByOption({
        id,
      });
    if (application) {
      Object.keys(remain).forEach((item: any) => {
        application[item] = remain[item];
      });
      await applicationAdmissionRegistrationRepo.save(application);
    }
    callback(null, { message: "Done" });
  } catch (error) {}
};

const ApplicationAdmissionRegistrationRPC = {
  GetAllApplicationRegistration,
  GetApplicationRegistrationByCode,
  UpdateApplicationRegistration,
};

export default ApplicationAdmissionRegistrationRPC;
