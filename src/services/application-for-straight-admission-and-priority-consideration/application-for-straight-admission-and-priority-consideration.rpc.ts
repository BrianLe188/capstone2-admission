import ApplicationForStraightAdmissionAndPriorityConsiderationService from "./application-for-straight-admission-and-priority-consideration.service";

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

const ApplicationForStraightAdmissionAndPriorityConsiderationRPC = {
  GetAllApplicationForStraightAdmissionAndPriorityConsideration,
  GetApplicationForStraightAdmissionAndPriorityConsiderationByCode,
};

export default ApplicationForStraightAdmissionAndPriorityConsiderationRPC;
