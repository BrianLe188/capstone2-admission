import { AdmissionDB } from "../../data-source";
import { Subject } from "./subjects.entity";

const subjectRepo = AdmissionDB.getRepository(Subject);

const CreateSubject = async (call: any, callback: any) => {
  try {
    const subject: any = new Subject();
    Object.keys(call.request).forEach((item) => {
      subject[item] = call.request[item];
    });
    await subjectRepo.save(subject);
    callback(null, { subject });
  } catch (error) {}
};

const UpdateSubject = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedSubject: any = await subjectRepo.findOneBy({
      id,
    });
    if (updatedSubject) {
      Object.keys(body).forEach((item) => {
        updatedSubject[item] = body[item];
      });
      await subjectRepo.save(updatedSubject);
      callback(null, { subject: updatedSubject });
    } else {
    }
  } catch (error) {}
};

const DeleteSubject = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const subject = await subjectRepo.findOneBy({ id });
    if (subject) {
      await subjectRepo.remove(subject);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const subjectRPC = {
  CreateSubject,
  UpdateSubject,
  DeleteSubject,
};

export default subjectRPC;
