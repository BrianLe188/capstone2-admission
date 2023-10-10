import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EApplyStatus } from "../../utils/enums";
import { ApplicationForAdmissionWithAHighSchoolScriptOptionOne } from "../application-for-admission-with-a-high-school-script-option-one/application-for-admission-with-a-high-school-script-option-one.entity";
import { ApplicationForAdmissionWithAHighSchoolScriptOptionTwo } from "../application-for-admission-with-a-high-school-script-option-two/application-for-admission-with-a-high-school-script-option-two.entity";

@Entity({
  name: "application_for_admission_with_a_high_school_script",
})
export class ApplicationForAdmissionWithAHighSchoolScript {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: EApplyStatus, default: EApplyStatus.PENDING })
  status: EApplyStatus;

  @Column()
  majorId: number;

  @Column()
  addressToReceiveAdmissionNotice: string;

  @OneToOne(() => ApplicationForAdmissionWithAHighSchoolScriptOptionOne)
  optionOne: ApplicationForAdmissionWithAHighSchoolScriptOptionOne;

  @OneToOne(() => ApplicationForAdmissionWithAHighSchoolScriptOptionTwo)
  optionTwo: ApplicationForAdmissionWithAHighSchoolScriptOptionTwo;

  @CreateDateColumn({ type: "timestamp" })
  submitedAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
