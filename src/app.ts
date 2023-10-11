import User from "./app/infrastructure/entity/user";
import { SetupServer } from "./config";

const setupServer = new SetupServer();

setupServer.init();

(async (): Promise<void> => {
    User.sync();
})();
