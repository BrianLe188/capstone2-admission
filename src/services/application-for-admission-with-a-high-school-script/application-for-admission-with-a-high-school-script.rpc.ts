import ApplicationForAdmissionWithAHighSchoolScriptService from "./application-for-admission-with-a-high-school-script.service";

const GetAllApplicationForAdmissionWithAHighSchoolScript = async (
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
  GetAllApplicationForAdmissionWithAHighSchoolScript,
};

export default ApplicationForAdmissionWithAHighSchoolScriptServiceRPC;
