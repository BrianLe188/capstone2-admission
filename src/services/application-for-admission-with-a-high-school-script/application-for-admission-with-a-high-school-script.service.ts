import { Prettify } from "../../utils/types";
import { ApplicationForAdmissionWithAHighSchoolScript } from "./application-for-admission-with-a-high-school-script.entity";

const create = async (req: {
  body: Prettify<Partial<ApplicationForAdmissionWithAHighSchoolScript>>;
}) => {
  try {
  } catch (error) {}
};

const ApplicationForAdmissionWithAHighSchoolScriptService = {
  create,
};

export default ApplicationForAdmissionWithAHighSchoolScriptService;
