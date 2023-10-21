import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Candidate } from "../candidate/candidate.entity";

@Entity({ name: "genders" })
export class Gender {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Candidate, (candidate) => candidate.gender)
  candidates: Candidate[];
}
