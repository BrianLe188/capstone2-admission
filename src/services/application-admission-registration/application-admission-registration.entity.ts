import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Area } from "../area/area.entity";
import { Priority } from "../priority/priority.entity";
import { ApplicationAdmissionRegistrationVoice } from "../application-admission-registration-voices/application-admission-registration-voices.entity";

@Entity({ name: "application_admission_registration" })
export class ApplicationAdmissionRegistration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  school: string;

  @Column()
  schoolCode: string;

  @ManyToOne(() => Area, (area) => area.applicationAdmissionRegistration)
  area: Area;

  @ManyToOne(() => Priority, (priority) => priority)
  priority: Priority;

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
