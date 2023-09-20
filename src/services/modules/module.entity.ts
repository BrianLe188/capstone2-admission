import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "modules" })
export class Module {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  key: string;

  @Column({
    length: 30,
  })
  name: string;

  @Column()
  path: string;
}
