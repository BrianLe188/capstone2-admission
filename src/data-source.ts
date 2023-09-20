import { DataSource, DataSourceOptions } from "typeorm";
import { Module } from "./services/modules/module.entity";

export const AdmissionDB = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Module],
  subscribers: [],
  migrations: [],
} as DataSourceOptions);
