import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Candidate } from "../candidate/candidate.entity";

@Entity({ name: "priorities" })
export class Priority {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    type: "text",
    nullable: true,
  })
  description: string;

  @OneToMany(() => Candidate, (candidate) => candidate.priority)
  candidates: Candidate[];
}
