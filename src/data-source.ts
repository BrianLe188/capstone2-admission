import { DataSource, DataSourceOptions } from "typeorm";
import { ApplicationAdmissionRegistration } from "./services/application-admission-registration/application-admission-registration.entity";
import { ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult } from "./services/application-for-admission-consideration-according-to-the-competence-assessment-test-result/application-for-admission-consideration-according-to-the-competence-assessment-test-result.entity";
import { ApplicationForAdmissionWithAHighSchoolScript } from "./services/application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.entity";
import { ApplicationForStraightAdmissionAndPriorityConsideration } from "./services/application-for-straight-admission-and-priority-consideration/application-for-straight-admission-and-priority-consideration.entity";
import { Area } from "./services/area/area.entity";
import { Candidate } from "./services/candidate/candidate.entity";
import { Gender } from "./services/gender/gender.entity";
import { Nation } from "./services/nation/nation.entity";
import { Priority } from "./services/priority/priority.entity";
import { ObjectAdmission } from "./services/object-admission/object-admission.entity";

export const AdmissionDB = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    Candidate,
    Gender,
    ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
    ApplicationForAdmissionWithAHighSchoolScript,
    ApplicationAdmissionRegistration,
    ApplicationForStraightAdmissionAndPriorityConsideration,
    Area,
    Priority,
    Nation,
    ObjectAdmission,
  ],
  subscribers: [],
  migrations: [],
} as DataSourceOptions);
