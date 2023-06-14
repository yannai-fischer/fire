import {database} from "firebase-admin";
import Database = database.Database;
import {Message} from "../../models/message";

export abstract class DbAgent {
    protected static db: Database;
    static init: () => void;
    protected static insert: (message:Message) => Promise<void>;
}