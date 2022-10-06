import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { WEEK_DAY } from "../model/Show";
import { ShowInputDTO } from "../types/showInputDTO";

export class ShowController {

    constructor (
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const { bandId, weekDay, startTime, endTime } = req.body

            const newShow: ShowInputDTO = {
                bandId,
                weekDay,
                startTime,
                endTime,
                token
            }

            await this.showBusiness.createShow(newShow)
            
            res.status(201).send({ message: "Show successfully registered"})
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public getShowsByDate = async (req: Request, res: Response) => {
        try {
            const { weekDay } = req.params

            const showsList = await this.showBusiness.getShowsByDate(weekDay as WEEK_DAY)
            
            res.status(200).send(showsList)
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}