import { AdmissionDB } from "../../data-source";
import { SubjectBlock } from "./subject-blocks.entity";

const subjectBlockRepo = AdmissionDB.getRepository(SubjectBlock);

const GetAllSubjectBlock = async (call: any, callback: any) => {
  try {
    const subject_blocks = await subjectBlockRepo.find();
    callback(null, {
      blocks: {
        data: subject_blocks,
      },
    });
  } catch (error) {}
};

const CreateSubjectBlock = async (call: any, callback: any) => {
  try {
    const subject_block: any = new SubjectBlock();
    Object.keys(call.request).forEach((item) => {
      subject_block[item] = call.request[item];
    });
    await subjectBlockRepo.save(subject_block);
    callback(null, { block: subject_block });
  } catch (error) {}
};

const UpdateSubjectBlock = async (call: any, callback: any) => {
  try {
    const { id, body } = call.request;
    const updatedSubjectBlock: any = await subjectBlockRepo.findOneBy({
      id,
    });
    if (updatedSubjectBlock) {
      Object.keys(body).forEach((item) => {
        updatedSubjectBlock[item] = body[item];
      });
      await subjectBlockRepo.save(updatedSubjectBlock);
      callback(null, { block: updatedSubjectBlock });
    } else {
    }
  } catch (error) {}
};

const DeleteSubjectBlock = async (call: any, callback: any) => {
  try {
    const { id } = call.request;
    const subject_block = await subjectBlockRepo.findOneBy({ id });
    if (subject_block) {
      await subjectBlockRepo.remove(subject_block);
      callback(null, { message: "Success" });
    } else {
      callback(null, { message: "Not found" });
    }
  } catch (error) {}
};

const subjectBlockRPC = {
  CreateSubjectBlock,
  UpdateSubjectBlock,
  DeleteSubjectBlock,
  GetAllSubjectBlock,
};

export default subjectBlockRPC;
