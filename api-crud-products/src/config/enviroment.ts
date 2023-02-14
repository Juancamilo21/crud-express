import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const ENVIROMENT = {
  PORT: Number(process.env.PORT),
  DB_PORT: Number(process.env.DB_PORT),
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DATABASE,
};
