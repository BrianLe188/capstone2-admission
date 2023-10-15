import { Prettify } from "../../utils/types";
import { ApplicationForAdmissionWithAHighSchoolScript } from "./application-for-admission-with-a-high-school-script.entity";
import { Candidate } from "../candidate/candidate.entity";

const create = async (req: {
  body: Prettify<Partial<ApplicationForAdmissionWithAHighSchoolScript>>;
}) => {
  try {
    console.log(req.body);
  } catch (error) {}
};

const ApplicationForAdmissionWithAHighSchoolScriptService = {
  create,
};

export default ApplicationForAdmissionWithAHighSchoolScriptService;
