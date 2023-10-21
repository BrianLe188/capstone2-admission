import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectAdmission } from "../object-admission/object-admission.entity";
import { Candidate } from "../candidate/candidate.entity";

@Entity({
  name: "application_for_straight_admission_and_priority_consideration",
})
export class ApplicationForStraightAdmissionAndPriorityConsideration {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  majorId: string;

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
}
