import { Candidate } from "./candidate.entity";
import { AdmissionDB } from "../../data-source";
import { Nation } from "../nation/nation.entity";
import { Gender } from "../gender/gender.entity";
import { Priority } from "../priority/priority.entity";
import { Area } from "../area/area.entity";

const candidateRepo = AdmissionDB.getRepository(Candidate);
const nationRepo = AdmissionDB.getRepository(Nation);
const genderRepo = AdmissionDB.getRepository(Gender);
const priorityRepo = AdmissionDB.getRepository(Priority);
const areaRepo = AdmissionDB.getRepository(Area);

const create = async (req: { body: any }) => {
  try {
    const {
      fullName,
      avatar,
      birthday,
      birthplace,
      cccd,
      highschoolAddress,
      highschoolGraduateYear,
      phonenumber,
      email,
      permanentResidence,
      gender,
      nation,
      priority,
      area,
    } = req.body;
    const candidate = new Candidate();
    candidate.fullName = fullName;
    candidate.avatar = avatar;
    candidate.birthday = birthday;
    candidate.birthplace = birthplace;
    candidate.cccd = cccd;
    candidate.highschoolAddress = highschoolAddress;
    candidate.highschoolGraduateYear = highschoolGraduateYear;
    candidate.phonenumber = phonenumber;
    candidate.email = email;
    candidate.permanentResidence = permanentResidence;
    if (nation) {
      const _nation = await nationRepo.findOne({
        where: {
          id: nation,
        },
      });
      if (_nation) {
        candidate.nation = _nation;
      }
    }
    if (area) {
      const _area = await areaRepo.findOne({
        where: {
          id: area,
        },
      });
      if (_area) {
        candidate.area = _area;
      }
    }
    if (gender) {
      const _gender = await genderRepo.findOne({
        where: {
          id: gender,
        },
      });
      if (_gender) {
        candidate.gender = _gender;
      }
    }
    if (priority) {
      const _priority = await priorityRepo.findOne({
        where: {
          id: priority,
        },
      });
      if (_priority) {
        candidate.priority = _priority;
      }
    }
    await candidateRepo.save(candidate);
    return candidate;
  } catch (error) {
    console.log(error);
  }
};

const CandidateService = {
  create,
};

export default CandidateService;
