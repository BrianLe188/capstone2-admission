import { AdmissionDB } from "../../data-source";
import { Priority } from "./priority.entity";

const priorityRepo = AdmissionDB.getRepository(Priority);

const GetAllPriority = async (call: any, callback: any) => {
  try {
    const priorities = await priorityRepo.find();
    callback(null, {
      priorities: {
        data: priorities,
      },
    });
  } catch (error) {
    callback(null, { error: "Not found" });
  }
};

const CreatePriority = async (call: any, callback: any) => {
  try {
    const priority: any = new Priority();
    Object.keys(call.request).forEach((item) => {
      priority[item] = call.request[item];
    });
    await priorityRepo.save(priority);
    callback(null, { priority });
  } catch (error) {}
};

const UpdatePriority = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedPriority: any = await priorityRepo.findOneBy({
      id,
    });
    if (updatedPriority) {
      Object.keys(body).forEach((item) => {
        updatedPriority[item] = body[item];
      });
      await priorityRepo.save(updatedPriority);
      callback(null, { priority: updatedPriority });
    } else {
    }
  } catch (error) {}
};

const DeletePriority = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const priority = await priorityRepo.findOneBy({ id });
    if (priority) {
      await priorityRepo.remove(priority);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const priorityRPC = {
  CreatePriority,
  UpdatePriority,
  DeletePriority,
  GetAllPriority,
};

export default priorityRPC;
