import { DataSource, DataSourceOptions } from "typeorm";
import { Candidate } from "./services/candidate/candidate.entity";
import { Gender } from "./services/gender/gender.entity";
import { ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult } from "./services/application-for-admission-consideration-according-to-the-competence-assessment-test-result/application-for-admission-consideration-according-to-the-competence-assessment-test-result.entity";
import { ApplicationForAdmissionWithAHighSchoolScript } from "./services/application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.entity";
import { ApplicationForAdmissionWithAHighSchoolScriptOptionTwo } from "./services/application-for-admission-with-a-high-school-script-option-two/application-for-admission-with-a-high-school-script-option-two.entity";
import { ApplicationForAdmissionWithAHighSchoolScriptOptionOne } from "./services/application-for-admission-with-a-high-school-script-option-one/application-for-admission-with-a-high-school-script-option-one.entity";
import { ApplicationAdmissionRegistration } from "./services/application-admission-registration/application-admission-registration.entity";
import { Area } from "./services/area/area.entity";
import { Priority } from "./services/priority/priority.entity";
import { Medal } from "./services/medal/medal.entity";
import { ApplicationForStraightAdmissionAndPriorityConsideration } from "./services/application-for-straight-admission-and-priority-consideration/application-for-straight-admission-and-priority-consideration.entity";
import { ApplicationAdmissionRegistrationVoice } from "./services/application-admission-registration-voices/application-admission-registration-voices.entity";

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
    ApplicationForAdmissionWithAHighSchoolScriptOptionOne,
    ApplicationForAdmissionWithAHighSchoolScriptOptionTwo,
    ApplicationAdmissionRegistration,
    ApplicationForStraightAdmissionAndPriorityConsideration,
    Area,
    Priority,
    Medal,
    ApplicationAdmissionRegistrationVoice,
  ],
  subscribers: [],
  migrations: [],
} as DataSourceOptions);
