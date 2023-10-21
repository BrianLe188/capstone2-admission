import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApplicationAdmissionRegistrationVoice } from "../application-admission-registration-voices/application-admission-registration-voices.entity";
import { Candidate } from "../candidate/candidate.entity";

@Entity({ name: "application_admission_registration" })
export class ApplicationAdmissionRegistration {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  school: string;

  @Column()
  schoolCode: string;

  @OneToMany(
    () => ApplicationAdmissionRegistrationVoice,
    (voice) => voice.application
  )
  voices: ApplicationAdmissionRegistrationVoice[];

  @CreateDateColumn({ type: "timestamp" })
  submitedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @OneToOne(
    () => Candidate,
    (candidate) => candidate.ApplicationAdmissionRegistration
  )
  @JoinColumn()
  candidate: Candidate;
}
