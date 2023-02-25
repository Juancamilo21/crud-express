import express from "express";
import morgan from "morgan";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./config/datasource";
import { ProductRoutes } from "./routes/product.routes";
import { PORT } from "./config/constants";

export class Server {
  public app: express.Application = express();
  private port: number = PORT;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.dataBaseConnections();
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use("/api", new ProductRoutes().router);
  }

  public dataBaseConnections() {
    AppDataSource.initialize()
      .then(() => console.log("Connected to MySQL"))
      .catch((error) => console.log(error));
  }

  public runServer() {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`);
    });
  }
}
