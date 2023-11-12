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

const GetApplicationForAdmissionWithAHighSchoolScriptByCode = async (
  call: any,
  callback: any
) => {
  try {
    const { code } = call.request;
    const application =
      await ApplicationForAdmissionWithAHighSchoolScriptService.getByOption({
        code,
        relations: {
          candidate: true,
        },
      });
    callback(null, application);
  } catch (error) {}
};

const ApplicationForAdmissionWithAHighSchoolScriptServiceRPC = {
  GetAllApplicationForAdmissionWithAHighSchoolScript,
  GetApplicationForAdmissionWithAHighSchoolScriptByCode,
};

export default ApplicationForAdmissionWithAHighSchoolScriptServiceRPC;
