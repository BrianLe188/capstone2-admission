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

const ApplicationForStraightAdmissionAndPriorityConsiderationRPC = {
  GetAllApplicationForStraightAdmissionAndPriorityConsideration,
};

export default ApplicationForStraightAdmissionAndPriorityConsiderationRPC;
