import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectAdmission } from "../object-admission/object-admission.entity";

@Entity({
  name: "application_for_straight_admission_and_priority_consideration",
})
export class ApplicationForStraightAdmissionAndPriorityConsideration {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  majorId: number;

  @Column({ type: "text" })
  attachDocument: string;

  @ManyToOne(
    () => ObjectAdmission,
    (object) => object.applicationForStraightAdmissionAndPriorityConsideration
  )
  objectAdmission: ObjectAdmission;
}
