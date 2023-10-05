import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Medal } from "../medal/medal.entity";

@Entity({
  name: "application_for_straight_admission_and_priority_consideration",
})
export class ApplicationForStraightAdmissionAndPriorityConsideration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "integer" })
  yearOfAward: number;

  @Column()
  subjectOfAward: number;

  @ManyToOne(
    () => Medal,
    (medal) => medal.applicationForStraightAdmissionAndPriorityConsideration
  )
  medalOfAward: Medal;

  @Column({ type: "integer" })
  yearOfRegionalAndInternationalOlympic: number;

  @Column()
  subjectOfRegionalAndInternationalOlympic: number;

  //tiep tuc
}
