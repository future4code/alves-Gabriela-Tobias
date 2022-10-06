import { Request, Response } from "express";
import { PhotoBusiness } from "../business/PhotoBusiness";
import { GetPhotosInputDTO } from "../types/getPhotosInputDTO";
import { PhotoInputDTO } from "../types/photoInputDTO";

export class PhotoController {

    constructor (
        private photoBusiness: PhotoBusiness
    ) {}

    public addPhoto = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const { photo, showId } = req.body

            const newPhoto: PhotoInputDTO = {
                photo,
                showId,
                token
            }

            await this.photoBusiness.addPhoto(newPhoto)

            res.status(201).send({ message: "Photo successfully add"})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public getPhotosById = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const { id } = req.params

            const input: GetPhotosInputDTO = {
                id,
                token
            }

            const photosList = await this.photoBusiness.getPhotosById(input)

            res.status(200).send({ photosList })
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}