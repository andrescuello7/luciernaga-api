import express from "express";
import bodyParser from 'body-parser'
import taskRoutes from "./task/task_router";
import userRoutes from "./user/user_router";
import authRoutes from "./auth/auth_router";
import historyRoutes from "./history/history_router";

import { DataService } from "../utils/manager/data_services";
export class App {
    private app = express();
    private port: number = 3000;

    constructor() {
        new DataService();
    }

    settings() {
        this.app.set('port', process.env.PORT || this.port);
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(express.json());
        this.app.use(bodyParser.json())
    }

    routes() {
        this.app.use("/api/user", userRoutes)
        this.app.use("/api/auth", authRoutes)
        this.app.use("/api/task", taskRoutes)
        this.app.use("/api/history", historyRoutes)
    }

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log("server listening on", this.app.get('port'));
        })
    }
}