import { Server } from "./app.server";

function main() {
  const app: Server = new Server();
  app.runServer();
}
main();
