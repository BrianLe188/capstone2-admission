import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Majors } from "../majors/majors.entity";

@Entity({ name: "member_schools" })
export class MemberSchool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column({ default: true })
  university: boolean;

  @Column({ default: false })
  after_university: boolean;

  @Column({ type: "text" })
  thumbnail: string;

  @Column({ type: "text" })
  logo: string;

  @OneToMany(() => Majors, (major) => major.member_school)
  majors: Majors[];
}
