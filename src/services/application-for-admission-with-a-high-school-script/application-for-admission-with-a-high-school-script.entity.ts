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
  name: "application_for_admission_with_a_high_school_script",
})
export class ApplicationForAdmissionWithAHighSchoolScript {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "enum", enum: EApplyStatus, default: EApplyStatus.PENDING })
  status: EApplyStatus;

  @Column()
  majorId: number;

  @Column()
  subjectOne: number;

  @Column({ type: "double" })
  subjectOneScore: number;

  @Column()
  subjectTwo: number;

  @Column({ type: "double" })
  subjectTwoScore: number;

  @Column()
  subjectThree: number;

  @Column({ type: "double" })
  subjectThreeScore: number;

  @Column({ type: "double" })
  total: number;

  @OneToOne(
    () => Candidate,
    (candidate) => candidate.ApplicationForAdmissionWithAHighSchoolScript
  )
  @JoinColumn()
  candidate: Candidate;

  @CreateDateColumn({ type: "timestamp" })
  submitedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
