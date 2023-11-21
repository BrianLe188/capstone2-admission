import ApplicationForAdmissionWithAHighSchoolScriptService from "./application-for-admission-with-a-high-school-script.service";
import { ApplicationForAdmissionWithAHighSchoolScript } from "./application-for-admission-with-a-high-school-script.entity";
import { AdmissionDB } from "../../data-source";

const applicationForAdmissionWithAHighSchoolScriptRepo =
  AdmissionDB.getRepository(ApplicationForAdmissionWithAHighSchoolScript);

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

const UpdateApplicationForAdmissionWithAHighSchoolScript = async (
  call: any,
  callback: any
) => {
  try {
    const { id, ...remain } = call.request;
    const application: any =
      await ApplicationForAdmissionWithAHighSchoolScriptService.getByOption({
        id,
      });
    if (application) {
      Object.keys(remain).forEach((item: any) => {
        application[item] = remain[item];
      });
      await applicationForAdmissionWithAHighSchoolScriptRepo.save(application);
    }
    callback(null, { message: "Done" });
  } catch (error) {}
};

const ApplicationForAdmissionWithAHighSchoolScriptServiceRPC = {
  GetAllApplicationForAdmissionWithAHighSchoolScript,
  GetApplicationForAdmissionWithAHighSchoolScriptByCode,
  UpdateApplicationForAdmissionWithAHighSchoolScript,
};

export default ApplicationForAdmissionWithAHighSchoolScriptServiceRPC;
