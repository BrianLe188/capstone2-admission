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

const ApplicationAdmissionRegistrationRPC = {
  GetAllApplicationRegistration,
};

export default ApplicationAdmissionRegistrationRPC;
