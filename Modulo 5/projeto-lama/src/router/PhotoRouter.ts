import express from "express"
import { PhotoBusiness } from "../business/PhotoBusiness"
import { PhotoController } from "../controller/PhotoController"
import { PhotoDatabase } from "../data/PhotoDatabase"
import { ShowDatabase } from "../data/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const photoRouter = express.Router()

const photoBusiness = new PhotoBusiness(
    new Authenticator(),
    new ShowDatabase(),
    new IdGenerator(),
    new PhotoDatabase()
)

const photoController = new PhotoController(
    photoBusiness
)


photoRouter.post("/", photoController.addPhoto)
photoRouter.get("/:id", photoController.getPhotosById)