import {Message} from "../models/message";
import {SendingHandler} from "../mailing-system/sending-handler";

export class Service {
    static async sendMessage(message:Message): Promise<void> {
        await SendingHandler.sendMessage(message);
    }
}