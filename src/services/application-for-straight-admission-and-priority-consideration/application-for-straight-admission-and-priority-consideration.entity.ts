import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectAdmission } from "../object-admission/object-admission.entity";
import { Candidate } from "../candidate/candidate.entity";
import { EApplyStatus } from "../../utils/enums";

@Entity({
  name: "application_for_straight_admission_and_priority_consideration",
})
export class ApplicationForStraightAdmissionAndPriorityConsideration {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  majorId: string;

  @Column()
  subMajorId: string;

  @Column({ type: "text", nullable: true })
  attachDocument: string;

  @ManyToOne(
    () => ObjectAdmission,
    (object) => object.applicationForStraightAdmissionAndPriorityConsideration
  )
  objectAdmission: ObjectAdmission;

  @OneToOne(() => Candidate, (candidate) => candidate)
  @JoinColumn()
  candidate: Candidate;

  @Column({ type: "enum", enum: EApplyStatus, default: EApplyStatus.PENDING })
  status: EApplyStatus;

  @CreateDateColumn({ type: "timestamp" })
  submitedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
