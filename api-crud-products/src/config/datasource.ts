import { DataSource } from "typeorm";
import { ENVIROMENT } from "./enviroment";
import { ProductEntity } from "../entities/product.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: ENVIROMENT.DB_HOST,
  port: ENVIROMENT.DB_PORT,
  username: ENVIROMENT.DB_USERNAME,
  password: ENVIROMENT.DB_PASSWORD,
  database: ENVIROMENT.DATABASE,
  entities: [ProductEntity],
  synchronize: true,
  logging: false,
});
