import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EApplyStatus } from "../../utils/enums";
import { Candidate } from "../candidate/candidate.entity";

@Entity({
  name: "application_for_admission_assessment_test_result",
})
export class ApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: EApplyStatus, default: EApplyStatus.PENDING })
  status: EApplyStatus;

  @Column({ length: 9 })
  examRegistrationApplicationCode: string;

  @Column()
  nameOfTheUniversityOrganizingTheExam: string;

  @Column()
  resultOfExam: number;

  @Column()
  majorId: string;

  @Column()
  subMajorId: string;

  @Column({ type: "text", nullable: true })
  attachPriorityDocument: string;

  @Column({ type: "text", nullable: true })
  attachOtherDocument: string;

  @CreateDateColumn({ type: "timestamp" })
  submitedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @OneToOne(() => Candidate, (candidate) => candidate)
  @JoinColumn()
  candidate: Candidate;
}
