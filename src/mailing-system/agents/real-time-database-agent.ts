import {DbAgent} from "./db-agent";
import * as admin from 'firebase-admin'
import {SERVICE_ACCOUNT} from "../../utils/consts";
import {getDatabase} from "firebase-admin/database";
import {Message} from "../../models/message";

const DB_URL: string = `https://alontest-c9a9a-default-rtdb.europe-west1.firebasedatabase.app`;

const REAL_TIME_DATABASE_CONFIG = {
    credential: admin.credential.cert(SERVICE_ACCOUNT),
    databaseURL: DB_URL
};

export class RealTimeDatabaseAgent extends DbAgent {

    static init():void {
        try {
            admin.initializeApp(REAL_TIME_DATABASE_CONFIG);
            RealTimeDatabaseAgent.db = getDatabase();
        } catch (error) {
            console.error(`Error occurred getting Real Time Database: ${error}`);
            throw error;
        }
    }

    static async insert(message:Message): Promise<void> {
        try {
            await RealTimeDatabaseAgent.db.ref(message.conversation).set(message.body);
        } catch (error) {
            console.error(`Error occurred inserting to Real Time Database: ${error}`);
            throw error;
        }
    }
}

let x = new RealTimeDatabaseAgent();
x
