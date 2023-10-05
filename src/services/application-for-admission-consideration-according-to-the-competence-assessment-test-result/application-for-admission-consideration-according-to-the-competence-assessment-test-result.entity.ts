import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EApplyStatus } from "../../utils/enums";
import { Priority } from "../priority/priority.entity";
import { Area } from "../area/area.entity";

@Entity({
  name: "application_for_admission_assessment_test_result",
})
export class ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: EApplyStatus, default: EApplyStatus.PENDING })
  status: EApplyStatus;

  @ManyToOne(
    () => Priority,
    (priority) =>
      priority.applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResults
  )
  priority: Priority;

  @ManyToOne(
    () => Area,
    (area) =>
      area.applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult
  )
  area: Area;

  @Column()
  addressToReceiveAdmissionNotice: string;

  @Column({ length: 9 })
  examRegistrationApplicationCode: string;

  @Column()
  nameOfTheUniversityOrganizingTheExam: string;

  @Column()
  resultOfExam: number;

  @Column()
  majorId: number;

  @Column({ type: "text" })
  attachPriorityDocument: string;

  @Column({ type: "text" })
  attachOtherDocument: string;

  @CreateDateColumn({ type: "timestamp" })
  submitedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
