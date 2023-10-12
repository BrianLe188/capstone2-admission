import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../gender/gender.entity";
import { Nation } from "../nation/nation.entity";
import { Priority } from "../priority/priority.entity";
import { Area } from "../area/area.entity";

@Entity({ name: "candidates" })
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  fullName: string;

  @Column({ type: "text" })
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
}
