import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApplicationForAdmissionWithAHighSchoolScript } from "../application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.entity";
import { ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult } from "../application-for-admission-consideration-according-to-the-competence-assessment-test-result/application-for-admission-consideration-according-to-the-competence-assessment-test-result.entity";
import { ApplicationAdmissionRegistration } from "../application-admission-registration/application-admission-registration.entity";

@Entity({ name: "priorities" })
export class Priority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => ApplicationForAdmissionWithAHighSchoolScript,
    (application) => application.priority
  )
  applicationForAdmissionWithAHighSchoolScripts: ApplicationForAdmissionWithAHighSchoolScript[];

  @OneToMany(
    () =>
      ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
    (application) => application.priority
  )
  applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResults: ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult[];

  @OneToMany(
    () => ApplicationAdmissionRegistration,
    (application) => application.priority
  )
  applicationAdmissionRegistration: ApplicationAdmissionRegistration[];
}
