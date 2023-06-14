import {RealTimeDatabaseAgent} from "./agents/real-time-database-agent";
import {Message} from "../models/message";

export class SendingHandler {

    static init(): void {
        RealTimeDatabaseAgent.init();
    }

    static async sendMessage(message:Message): Promise<void> {
        await RealTimeDatabaseAgent.insert(message);
    }
}