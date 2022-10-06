import { PhotoDatabase } from "../data/PhotoDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { Photo } from "../model/Photo";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { GetPhotosInputDTO } from "../types/getPhotosInputDTO";
import { PhotoInputDTO } from "../types/photoInputDTO";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";
import { UnauthorizedError } from "./errors/UnauthorizedError";

export class PhotoBusiness {

    constructor (
        private authenticator: Authenticator,
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private photoDatabase: PhotoDatabase

    ) {}

    public addPhoto = async (newPhoto: PhotoInputDTO) => {
        
        const { photo, showId, token } = newPhoto

        if (!token) {
            throw new InvalidInputError("Invalid entry! 'Token' is required.")
        }

        if (!photo || !showId) {
            throw new InvalidInputError("Invalid entries! The 'photo' and 'showId' fields are required.")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (!userTokenData) {
            throw new UnauthorizedError("Invalid token! You need a valid token.")
        }

        const showFromDB = await this.showDatabase.selectShowById(showId)

        if (!showFromDB) {
            throw new NotFoundError("Show not found, make sure id is correct.")
        }

        const id = this.idGenerator.generate()

        const photoInput = new Photo(
            id,
            photo,
            showId
        )

        await this.photoDatabase.insertPhoto(photoInput)
    }

    public getPhotosById = async (input: GetPhotosInputDTO) => {
        
        const { id, token } = input

        if (!token) {
            throw new InvalidInputError("Invalid entry! 'Token' is required.")
        }

        if (!id || id === ":id") {
            throw new InvalidInputError("Invalid entry! The show 'id' params are required.")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (!userTokenData) {
            throw new UnauthorizedError("Invalid token! You need a valid token.")
        }

        const showFromDB = await this.showDatabase.selectShowById(id)

        if (!showFromDB) {
            throw new NotFoundError("Show not found, make sure id is correct.")
        }

        const photosList = await this.photoDatabase.selectPhotosByShowId(id)

        return photosList
    }
}