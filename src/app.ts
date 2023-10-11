import { SetupServer } from "./config";

const setupServer = new SetupServer();

setupServer.init();
console.log("SetupServer.getSequelize().sync()");
SetupServer.getSequelize().sync();
