import ApplicationForStraightAdmissionAndPriorityConsiderationService from "./application-for-straight-admission-and-priority-consideration.service";
import { ApplicationForStraightAdmissionAndPriorityConsideration } from "./application-for-straight-admission-and-priority-consideration.entity";
import { AdmissionDB } from "../../data-source";

const applicationForStraightAdmissionAndPriorityConsiderationRepo =
  AdmissionDB.getRepository(
    ApplicationForStraightAdmissionAndPriorityConsideration
  );

const GetAllApplicationForStraightAdmissionAndPriorityConsideration = async (
  call: any,
  callback: any
) => {
  try {
    const applications =
      await ApplicationForStraightAdmissionAndPriorityConsiderationService.getAll();
    callback(null, {
      applications: {
        data: applications,
      },
    });
  } catch (error) {}
};

const GetApplicationForStraightAdmissionAndPriorityConsiderationByCode = async (
  call: any,
  callback: any
) => {
  try {
    const { code } = call.request;
    const application =
      await ApplicationForStraightAdmissionAndPriorityConsiderationService.getByOption(
        {
          code,
          relations: {
            candidate: true,
          },
        }
      );
    callback(null, application);
  } catch (error) {}
};

const UpdateApplicationForStraightAdmissionAndPriorityConsideration = async (
  call: any,
  callback: any
) => {
  try {
    const { id, ...remain } = call.request;
    const application: any =
      await ApplicationForStraightAdmissionAndPriorityConsiderationService.getByOption(
        {
          id,
        }
      );
    if (application) {
      Object.keys(remain).forEach((item: any) => {
        application[item] = remain[item];
      });
      await applicationForStraightAdmissionAndPriorityConsiderationRepo.save(
        application
      );
    }
    callback(null, { message: "Done" });
  } catch (error) {}
};

const ApplicationForStraightAdmissionAndPriorityConsiderationRPC = {
  GetAllApplicationForStraightAdmissionAndPriorityConsideration,
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode,
  UpdateApplicationForStraightAdmissionAndPriorityConsideration,
};

export default ApplicationForStraightAdmissionAndPriorityConsiderationRPC;
