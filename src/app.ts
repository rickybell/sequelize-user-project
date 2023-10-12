import { UserEntity } from "@entities/index";
import { SetupServer } from "./config";

const setupServer = new SetupServer();

setupServer.init();

(async (): Promise<void> => {
    UserEntity.sync();
})();
