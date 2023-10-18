import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EApplyStatus } from "../../utils/enums";

@Entity({
  name: "application_for_admission_assessment_test_result",
})
export class ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "enum", enum: EApplyStatus, default: EApplyStatus.PENDING })
  status: EApplyStatus;

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
