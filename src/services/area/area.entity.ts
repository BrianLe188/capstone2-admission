import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Candidate } from "../candidate/candidate.entity";

@Entity({ name: "areas" })
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Candidate, (candidate) => candidate.area)
  candidates: Candidate[];
}
