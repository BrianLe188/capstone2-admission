import { AdmissionDB } from "../../data-source";
import { ObjectAdmission } from "./object-admission.entity";

const objectRepo = AdmissionDB.getRepository(ObjectAdmission);

const GetAllObjectAdmission = async (call: any, callback: any) => {
  try {
    const objects = await objectRepo.find();
    callback(null, {
      objects: {
        data: objects,
      },
    });
  } catch (error) {
    callback(null, { error: "Not found" });
  }
};

const CreateObjectAdmission = async (call: any, callback: any) => {
  try {
    const object: any = new ObjectAdmission();
    Object.keys(call.request).forEach((item) => {
      object[item] = call.request[item];
    });
    await objectRepo.save(object);
    callback(null, { object });
  } catch (error) {}
};

const UpdateObjectAdmission = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedObject: any = await objectRepo.findOneBy({
      id,
    });
    if (updatedObject) {
      Object.keys(body).forEach((item) => {
        updatedObject[item] = body[item];
      });
      await objectRepo.save(updatedObject);
      callback(null, { object: updatedObject });
    } else {
    }
  } catch (error) {}
};

const DeleteObjectAdmission = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const object = await objectRepo.findOneBy({ id });
    if (object) {
      await objectRepo.remove(object);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const objectRPC = {
  CreateObjectAdmission,
  UpdateObjectAdmission,
  DeleteObjectAdmission,
  GetAllObjectAdmission,
};

export default objectRPC;
