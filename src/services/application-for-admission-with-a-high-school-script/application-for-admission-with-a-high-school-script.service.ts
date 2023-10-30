import { AdmissionDB } from "../../data-source";
import { Prettify } from "../../utils/types";
import { ApplicationForAdmissionWithAHighSchoolScript } from "./application-for-admission-with-a-high-school-script.entity";

const applicationForAdmissionWithAHighSchoolScriptRepo =
  AdmissionDB.getRepository(ApplicationForAdmissionWithAHighSchoolScript);

const create = async (req: {
  body: Prettify<Partial<ApplicationForAdmissionWithAHighSchoolScript>>;
}) => {
  try {
    const application: any = new ApplicationForAdmissionWithAHighSchoolScript();
    Object.keys(req.body).forEach((item) => {
      application[item] = req.body[item as keyof typeof req.body];
    });
    await applicationForAdmissionWithAHighSchoolScriptRepo.save(application);
    return application;
  } catch (error) {}
};

const getAll = async () => {
  try {
    const applications =
      await applicationForAdmissionWithAHighSchoolScriptRepo.find({
        relations: {
          candidate: true,
        },
      });
    return applications;
  } catch (error) {}
};

const ApplicationForAdmissionWithAHighSchoolScriptService = {
  create,
  getAll,
};

export default ApplicationForAdmissionWithAHighSchoolScriptService;
