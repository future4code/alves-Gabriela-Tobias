import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO } from "../types/bandInputDTO";
import { GetBandInputDTO } from "../types/getBandInputDTO";

export class BandController {

    constructor (
        private bandBusiness: BandBusiness
    ) {}

    public createBand = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const { name, musicGenre, responsible } = req.body

            const newBand: BandInputDTO = {
                name,
                musicGenre,
                responsible,
                token
            }

            await this.bandBusiness.createBand(newBand)

            res.status(201).send({ message: "Band successfully registered"})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public getBand = async (req: Request, res: Response) => {
        try {

            const { search } = req.query

            const band = await this.bandBusiness.getBand(search as string)

            res.status(200).send({ band })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}