import { AdmissionDB } from "../../data-source";
import { Prettify } from "../../utils/types";
import { ApplicationForStraightAdmissionAndPriorityConsideration } from "./application-for-straight-admission-and-priority-consideration.entity";

const applicationForStraightAdmissionAndPriorityConsiderationRepo =
  AdmissionDB.getRepository(
    ApplicationForStraightAdmissionAndPriorityConsideration
  );

const create = async (req: {
  body: Prettify<
    Partial<ApplicationForStraightAdmissionAndPriorityConsideration>
  >;
}) => {
  try {
    const application: any =
      new ApplicationForStraightAdmissionAndPriorityConsideration();
    Object.keys(req.body).forEach((item) => {
      application[item] = req.body[item as keyof typeof req.body];
    });
    await applicationForStraightAdmissionAndPriorityConsiderationRepo.save(
      application
    );
    return application;
  } catch (error) {}
};

const getAll = async () => {
  try {
    const applications =
      await applicationForStraightAdmissionAndPriorityConsiderationRepo.find({
        relations: {
          candidate: true,
        },
      });
    return applications;
  } catch (error) {}
};

const getByOption = async (option: any = {}) => {
  try {
    const { relations, ...rest } = option;
    const application =
      await applicationForStraightAdmissionAndPriorityConsiderationRepo.findOne(
        {
          where: rest,
          relations,
        }
      );
    return application;
  } catch (error) {
    console.log(error);
  }
};

const ApplicationForStraightAdmissionAndPriorityConsiderationService = {
  create,
  getAll,
  getByOption,
};

export default ApplicationForStraightAdmissionAndPriorityConsiderationService;
