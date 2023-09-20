import { AdmissionDB } from "@/data-source";
import { Module } from "./module.entity";

const create = () => {
  const moduleRepo = AdmissionDB.getRepository(Module);
};

const moduleService = {
  create,
};

export default moduleService;
