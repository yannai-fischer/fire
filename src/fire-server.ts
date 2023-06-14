import {ServerManager} from "./server-system/server-manager";
import {SendingHandler} from "./mailing-system/sending-handler";

export class FireServer {
    static run(): void {
        try {
            ServerManager.runServer();
            SendingHandler.init();
            console.log(`Fire Server up and running!`);
        } catch (error) {
            console.error(`Error starting server: ${error}`);
            throw error;
        }
    }
}
