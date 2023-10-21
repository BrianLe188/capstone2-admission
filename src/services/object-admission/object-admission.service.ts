import { AdmissionDB } from "../../data-source";
import { ObjectAdmission } from "./object-admission.entity";

const objectRepo = AdmissionDB.getRepository(ObjectAdmission);

const findOne = async (req: { body: Partial<ObjectAdmission> }) => {
  try {
    const object = await objectRepo.findOne({
      where: req.body,
    });
    return object;
  } catch (error) {}
};

const ObjectAdmissionService = {
  findOne,
};

export default ObjectAdmissionService;
