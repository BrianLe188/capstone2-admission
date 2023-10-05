import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApplicationForStraightAdmissionAndPriorityConsideration } from "../application-for-straight-admission-and-priority-consideration/application-for-straight-admission-and-priority-consideration.entity";

@Entity({ name: "medals" })
export class Medal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => ApplicationForStraightAdmissionAndPriorityConsideration,
    (application) => application.medalOfAward
  )
  applicationForStraightAdmissionAndPriorityConsideration: ApplicationForStraightAdmissionAndPriorityConsideration[];
}
