import {Express, Request, Response} from 'express';
import {Message} from "../models/message";
import {Service} from "./service";

export class Controller {
    static setRoutes(app: Express): void {
        app.get('/health', this.checkHealth);
        app.post('/sendMessage', this.sendMessage);
    }

    private static checkHealth(req: Request, res: Response): Response {
        try {
            console.log('Received health check request');
            return res.send('OK');
        } catch (error) {
            console.error('Health check failed...', error);
        }
    }

    private static async sendMessage(req: Request, res: Response): Promise<Response> {
        let message: Message;
        try {
            message = req.body;
            console.log('Received message to send:', message);
            await Service.sendMessage(message);
            return res.send('Message sent successfully');
        } catch (error) {
            console.error(`sendMessage failed... message:${message ?? `could not read message`}`, error);
        }
    }
}