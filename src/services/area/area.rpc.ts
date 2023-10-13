import { AdmissionDB } from "../../data-source";
import { Area } from "./area.entity";

const areaRepo = AdmissionDB.getRepository(Area);

const GetAllArea = async (call: any, callback: any) => {
  try {
    const areas = await areaRepo.find();
    callback(null, {
      areas: {
        data: areas,
      },
    });
  } catch (error) {
    callback(null, { error: "Not found" });
  }
};

const CreateGender = async (call: any, callback: any) => {
  try {
    const area: any = new Area();
    Object.keys(call.request).forEach((item) => {
      area[item] = call.request[item];
    });
    await areaRepo.save(area);
    callback(null, { area });
  } catch (error) {}
};

const UpdateArea = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedArea: any = await areaRepo.findOneBy({
      id,
    });
    if (updatedArea) {
      Object.keys(body).forEach((item) => {
        updatedArea[item] = body[item];
      });
      await areaRepo.save(updatedArea);
      callback(null, { area: updatedArea });
    } else {
    }
  } catch (error) {}
};

const DeleteArea = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const area = await areaRepo.findOneBy({ id });
    if (area) {
      await areaRepo.remove(area);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const areaRPC = {
  CreateGender,
  UpdateArea,
  DeleteArea,
  GetAllArea,
};

export default areaRPC;
