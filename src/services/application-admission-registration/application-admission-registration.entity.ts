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

@Entity({ name: "application_admission_registration" })
export class ApplicationAdmissionRegistration {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  school: string;

  @Column({ nullable: true })
  schoolCode: string;

  @CreateDateColumn({ type: "timestamp" })
  submitedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @OneToOne(
    () => Candidate,
    (candidate) => candidate.ApplicationAdmissionRegistration
  )
  @JoinColumn()
  candidate: Candidate;

  @Column({ type: "enum", enum: EApplyStatus, default: EApplyStatus.PENDING })
  status: EApplyStatus;

  @Column()
  majorId: string;

  @Column()
  subMajorId: string;

  @Column()
  subjectOne: string;

  @Column({ type: "double" })
  subjectOneScore: number;

  @Column()
  subjectTwo: string;

  @Column({ type: "double" })
  subjectTwoScore: number;

  @Column()
  subjectThree: string;

  @Column({ type: "double" })
  subjectThreeScore: number;

  @Column({ type: "double" })
  total: number;
}
