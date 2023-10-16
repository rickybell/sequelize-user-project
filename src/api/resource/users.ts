import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import { UserRepository } from '@repositories/index';
import { BaseController } from ".";

@Controller('users')
export default class UsersController extends BaseController {
    constructor(private userRepository: UserRepository) {
        super();
    }
    @Get('')
    public getAllUsers(_req: Request, res: Response): void {
        (async (): Promise<void> => {
            const users = await this.userRepository.findAll();
            res.status(200).json(users);
        })();
    }

    @Post('')
    public postMain(req: Request, res: Response): void {
        (async (): Promise<void> => {
            const user = await this.userRepository.create(req.body);
            res.status(200).json(user);
        })();
    }
}
