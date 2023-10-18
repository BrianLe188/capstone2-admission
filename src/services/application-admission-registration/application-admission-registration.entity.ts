import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApplicationAdmissionRegistrationVoice } from "../application-admission-registration-voices/application-admission-registration-voices.entity";

@Entity({ name: "application_admission_registration" })
export class ApplicationAdmissionRegistration {
  @PrimaryGeneratedColumn("uuid")
  id: number;

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
}
