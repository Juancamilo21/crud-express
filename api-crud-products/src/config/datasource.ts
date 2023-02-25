import { DataSource } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import {
  DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "./constants";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE,
  entities: [ProductEntity],
  synchronize: true,
  logging: false,
});
