import {Controller} from "../api/controller";
import express, {Express, Request, Response} from "express";

export const PORT: number = 3000;

export class ServerManager {
    static runServer(): void {
        try {
            Controller.setRoutes(ServerManager.getApp());
        } catch (error) {
            console.error(`Error occurred initialising service: ${error}`);
            throw error;
        }
    }

    private static getApp(): Express {
        try {
            const app: Express = express();
            app.use(express.json());
            app.use(express.urlencoded({extended: false}));
            app.get('/', (req: Request, res: Response) => res.send(`App running on port ${PORT}!`));
            app.listen(PORT);
            console.log(`App running on port ${PORT}!`);
            return app;
        } catch (error) {
            console.error(`Error occurred initialising Express: ${error}`);
            throw error;
        }
    }
}