import { AdmissionDB } from "../../data-source";
import { Gender } from "./gender.entity";

const genderRepo = AdmissionDB.getRepository(Gender);

const GetAllGender = async (call: any, callback: any) => {
  try {
    const genders = await genderRepo.find();
    callback(null, {
      genders: {
        data: genders,
      },
    });
  } catch (error) {
    callback(null, { error: "Not found" });
  }
};

const CreateGender = async (call: any, callback: any) => {
  try {
    const gender: any = new Gender();
    Object.keys(call.request).forEach((item) => {
      gender[item] = call.request[item];
    });
    await genderRepo.save(gender);
    callback(null, { gender });
  } catch (error) {}
};

const UpdateGender = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedModule: any = await genderRepo.findOneBy({
      id,
    });
    if (updatedModule) {
      Object.keys(body).forEach((item) => {
        updatedModule[item] = body[item];
      });
      await genderRepo.save(updatedModule);
      callback(null, { gender: updatedModule });
    } else {
    }
  } catch (error) {}
};

const DeleteGender = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const gender = await genderRepo.findOneBy({ id });
    if (gender) {
      await genderRepo.remove(gender);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const genderRPC = {
  CreateGender,
  UpdateGender,
  DeleteGender,
  GetAllGender,
};

export default genderRPC;
