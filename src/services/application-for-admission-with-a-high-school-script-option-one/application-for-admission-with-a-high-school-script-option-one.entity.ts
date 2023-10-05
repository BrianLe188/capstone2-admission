import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApplicationForAdmissionWithAHighSchoolScript } from "../application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.entity";

@Entity({
  name: "application-for-admission-with-a-high-school-script-option-one",
})
export class ApplicationForAdmissionWithAHighSchoolScriptOptionOne {
  @PrimaryGeneratedColumn()
  id: number;

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
    () => ApplicationForAdmissionWithAHighSchoolScript,
    (application) => application.optionOne
  )
  @JoinColumn()
  application: ApplicationForAdmissionWithAHighSchoolScript;
}
