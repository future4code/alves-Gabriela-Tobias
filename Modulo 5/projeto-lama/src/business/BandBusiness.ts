import { BandDatabase } from "../data/BandDatabase";
import { Band } from "../model/Band";
import { USER_ROLE } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BandInputDTO } from "../types/bandInputDTO";
import { GetBandInputDTO } from "../types/getBandInputDTO";
import { ConflictError } from "./errors/ConflictError";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";
import { UnauthorizedError } from "./errors/UnauthorizedError";

export class BandBusiness {

    constructor (
        private IdGenerator: IdGenerator,
        private bandDatabase: BandDatabase,
        private authenticator: Authenticator
    ) {}

    public createBand = async (newBand: BandInputDTO) => {
        
        const { name, musicGenre, responsible, token } = newBand

        if (!name || !musicGenre || !responsible) {
            throw new InvalidInputError("Invalid entries. The 'name', 'musicGenre' and 'responsible' fields are required.")
        }

        if (!token) {
            throw new InvalidInputError("Invalid entry. Token is required.")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (userTokenData.role !== USER_ROLE.ADMIN) {
            throw new UnauthorizedError("Invalid token. You need to be an administrator to register a band.")
        }

        const bandFromDB = await this.bandDatabase.selectBandByName(name)

        if (bandFromDB) {
            throw new ConflictError("Band already registered in the system")
        }

        const id = this.IdGenerator.generate()

        const band = new Band(
            id,
            name,
            musicGenre,
            responsible
        )

        await this.bandDatabase.insertBand(band)
    }
    
    public getBand = async (search: string) => {

        if (!search) {
            throw new InvalidInputError("Invalid entries. The band 'name' or 'id' are required for query.")
        }

        const bandFromDB = await this.bandDatabase.selectBand(search)

        if (!bandFromDB) {
            throw new NotFoundError("Band not found, make sure name or id is correct.")
        }

        return bandFromDB
    }
}