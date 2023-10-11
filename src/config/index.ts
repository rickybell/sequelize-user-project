import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import logger from "morgan";
import config from "config";
import { Sequelize } from 'sequelize';
import { MainController } from '@api/resource/main';


export class SetupServer extends Server {
    static sequelize: Sequelize;
    constructor(private port = 4000) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupLogger();
        this.setupListen();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupLogger(): void {
        this.app.use(logger("tiny"))
    }

    private setupListen(): void {
        this.app.listen(this.port, () => console.log(`The server is listening on port ${this.port}`))
    }

    static getSequelize(): Sequelize {
        SetupServer.sequelize = new Sequelize(config.get("config.Sequelize"));
        return this.sequelize;
    }

    private setupControllers(): void {
        const mainController = new MainController();
        this.addControllers([mainController]);
    }

    public getApp(): Application {
        return this.app;
    }

}