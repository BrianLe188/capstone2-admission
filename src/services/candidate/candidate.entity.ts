import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Gender } from "../gender/gender.entity";
import { Nation } from "../nation/nation.entity";
import { Priority } from "../priority/priority.entity";
import { Area } from "../area/area.entity";
import { ApplicationForAdmissionWithAHighSchoolScript } from "../application-for-admission-with-a-high-school-script/application-for-admission-with-a-high-school-script.entity";

@Entity({ name: "candidates" })
export class Candidate {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 30 })
  fullName: string;

  @Column({ type: "text", nullable: true })
  avatar: string;

  @Column({ type: "date" })
  birthday: string;

  @Column({ nullable: true })
  birthplace: string;

  @Column()
  @Column({ length: 12 })
  cccd: string;

  @Column({ type: "text" })
  highschoolAddress: string;

  @Column({ type: "integer", nullable: true })
  highschoolGraduateYear: number;

  @Column({ length: 10 })
  phonenumber: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  permanentResidence: string;

  @Column({ nullable: true })
  addressToReceiveAdmissionNotice: string;

  @ManyToOne(() => Gender, (gender) => gender.candidates)
  gender: Gender;

  @ManyToOne(() => Nation, (nation) => nation.candidates, { nullable: true })
  nation: Nation;

  @ManyToOne(() => Priority, (priority) => priority.candidates, {
    nullable: true,
  })
  priority: Priority;

  @ManyToOne(() => Area, (area) => area.candidates, {
    nullable: true,
  })
  area: Area;

  @OneToOne(
    () => ApplicationForAdmissionWithAHighSchoolScript,
    (application) => application.candidate
  )
  ApplicationForAdmissionWithAHighSchoolScript: ApplicationForAdmissionWithAHighSchoolScript;
}
