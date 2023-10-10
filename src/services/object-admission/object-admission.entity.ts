import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApplicationForStraightAdmissionAndPriorityConsideration } from "../application-for-straight-admission-and-priority-consideration/application-for-straight-admission-and-priority-consideration.entity";

@Entity({ name: "object_admission" })
export class ObjectAdmission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => ApplicationForStraightAdmissionAndPriorityConsideration,
    (application) => application.objectAdmission
  )
  applicationForStraightAdmissionAndPriorityConsideration: ApplicationForStraightAdmissionAndPriorityConsideration[];
}
