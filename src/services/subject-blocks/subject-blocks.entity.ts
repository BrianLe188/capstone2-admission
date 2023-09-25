import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subject } from "../subjects/subjects.entity";

@Entity({ name: "subject_blocks" })
export class SubjectBlock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 3 })
  name: string;

  @ManyToMany(() => Subject, (subject) => subject.subjectBlocks)
  @JoinTable()
  subjects: Subject[];
}
