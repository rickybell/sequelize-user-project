import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import logger from "morgan";
import config from "config";
import { Sequelize } from 'sequelize-typescript';
import MainController from '@api/resource/main';
import UsersController from '@api/resource/users';
import { UserSequelizeDBRepository } from '@repositories/sequelize/userSequelizeDBRepository';
import UserEntity from '@entities/user';
export class SetupServer extends Server {
    static sequelize: Sequelize;
    constructor(private port = 4000) {
        super();
    }
    
    public init(): void {
        this.setupExpress();
        this.setupLogger();
        this.setupListen();
        SetupServer.setupSequelize(); 
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
    
    static setupSequelize(): Sequelize {
        SetupServer.sequelize = new Sequelize(config.get("config.Sequelize"));
        (async (): Promise<void> => {
            await UserEntity.sync();
        })();
        return SetupServer.sequelize;
    }
    
    private setupControllers(): void {
        const mainController = new MainController();
        const usersController = new UsersController(new UserSequelizeDBRepository());
        
        this.addControllers([
            mainController,
            usersController
        ]);
    }

    public getApp(): Application {
        return this.app;
    }

}