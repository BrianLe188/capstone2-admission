import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../gender/gender.entity";

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

  @Column({ length: 12 })
  cccd: string;

  @Column({ type: "text" })
  highschoolAddress: string;

  @Column({ type: "integer" })
  highschoolGraduateYear: number;

  @Column({ length: 10 })
  phonenumber: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  permanentResidence: string;

  @ManyToOne(() => Gender, (gender) => gender.candidates)
  gender: Gender;
}
