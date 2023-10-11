import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import path from "path"

@Controller('main')
export class MainController {

    @Get('')
    public getMain(_req: Request, res: Response): void {
        res.sendFile(path.join(__dirname, "../../app/views","index.html"))
    }
}
