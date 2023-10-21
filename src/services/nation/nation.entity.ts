import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Candidate } from "../candidate/candidate.entity";

@Entity({ name: "nations" })
export class Nation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Candidate, (candidate) => candidate.nation)
  candidates: Candidate[];
}
