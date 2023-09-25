import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EDUCATIONAL_LEVEL } from "../../utils/enums";
import { MemberSchool } from "../member-schools/member-schools.entity";

@Entity({ name: "majors" })
export class Majors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: EDUCATIONAL_LEVEL,
    default: EDUCATIONAL_LEVEL.UNIVERSITY,
  })
  educationalLevel: EDUCATIONAL_LEVEL;

  @Column()
  industryCode: string;

  @Column()
  specializedCode: string;

  @ManyToOne(() => MemberSchool, (member) => member.majors)
  memberSchool: MemberSchool;
}
