import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApplicationAdmissionRegistration } from "../application-admission-registration/application-admission-registration.entity";

@Entity({ name: "application_admission_registration_voices" })
export class ApplicationAdmissionRegistrationVoice {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  majorId: number;

  @Column()
  subjectOne: number;

  @Column({ type: "double" })
  subjectOneScore: number;

  @Column()
  subjectTwo: number;

  @Column({ type: "double" })
  subjectTwoScore: number;

  @Column()
  subjectThree: number;

  @Column({ type: "double" })
  subjectThreeScore: number;

  @Column({ nullable: true })
  order: number;

  @Column({ type: "double" })
  totalScore: number;

  @ManyToOne(
    () => ApplicationAdmissionRegistration,
    (application) => application.voices
  )
  application: ApplicationAdmissionRegistration;
}
