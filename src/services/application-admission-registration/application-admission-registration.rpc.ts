import ApplicationAdmissionRegistrationService from "./application-admission-registration.service";

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

const ApplicationAdmissionRegistrationRPC = {
  GetAllApplicationRegistration,
  GetApplicationRegistrationByCode,
};

export default ApplicationAdmissionRegistrationRPC;
