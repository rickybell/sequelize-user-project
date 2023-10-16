import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import path from "path"
import { BaseController } from ".";

@Controller('')
export default class MainController extends BaseController{
    @Get('')
    public getMain(_req: Request, res: Response): void {
        res.sendFile(path.join(__dirname, "../../app/views","index.html"))
    }
}
