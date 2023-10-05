import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApplicationForAdmissionWithAHighSchoolScript } from "../application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.entity";

@Entity({
  name: "application-for-admission-with-a-high-school-script-option-two",
})
export class ApplicationForAdmissionWithAHighSchoolScriptOptionTwo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subjectOne: number;

  @Column({ type: "double" })
  subjectOneAverageScoreClass11: number;

  @Column({ type: "double" })
  subjectOneAverageScoreSemester1Class12: number;

  @Column({ type: "double" })
  subjectOneTotal: number;

  @Column()
  subjectTwo: number;

  @Column({ type: "double" })
  subjectTwoAverageScoreClass11: number;

  @Column({ type: "double" })
  subjectTwoAverageScoreSemester1Class12: number;

  @Column({ type: "double" })
  subjectTwoTotal: number;

  @Column()
  subjectThree: number;

  @Column({ type: "double" })
  subjectThreeAverageScoreClass11: number;

  @Column({ type: "double" })
  subjectThreeAverageScoreSemester1Class12: number;

  @Column({ type: "double" })
  subjectThreeTotal: number;

  @Column({ type: "double" })
  total: number;

  @OneToOne(
    () => ApplicationForAdmissionWithAHighSchoolScript,
    (application) => application.optionTwo
  )
  @JoinColumn()
  application: ApplicationForAdmissionWithAHighSchoolScript;
}
