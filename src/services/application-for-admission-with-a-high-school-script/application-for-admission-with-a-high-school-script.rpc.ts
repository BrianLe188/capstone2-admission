import ApplicationForAdmissionWithAHighSchoolScriptService from "./application-for-admission-with-a-high-school-script.service";

const GetAllApplicationForAdmissionWithAHighSchoolScriptService = async (
  call: any,
  callback: any
) => {
  try {
    const applications =
      await ApplicationForAdmissionWithAHighSchoolScriptService.getAll();
    callback(null, {
      applications: {
        data: applications,
      },
    });
  } catch (error) {}
};

const ApplicationForAdmissionWithAHighSchoolScriptServiceRPC = {
  GetAllApplicationForAdmissionWithAHighSchoolScriptService,
};

export default ApplicationForAdmissionWithAHighSchoolScriptServiceRPC;
