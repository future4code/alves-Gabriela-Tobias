import { BandDatabase } from "../data/BandDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { Show, WEEK_DAY } from "../model/Show";
import { USER_ROLE } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { ShowInputDTO } from "../types/showInputDTO";
import { ConflictError } from "./errors/ConflictError";
import { CustomError } from "./errors/CustomError";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";
import { UnauthorizedError } from "./errors/UnauthorizedError";

export class ShowBusiness {

    constructor(
        private IdGenerator: IdGenerator,
        private showDatabase: ShowDatabase,
        private bandDatabase: BandDatabase,
        private authenticator: Authenticator
    ) { }

    createShow = async (newShow: ShowInputDTO) => {

        const { bandId, weekDay, startTime, endTime, token } = newShow

        console.log(weekDay)
        if (!bandId) {
            throw new InvalidInputError("Invalid entry. 'BandId' is required")
        }
        

        if (!weekDay || !startTime || !endTime) {
            throw new InvalidInputError("Invalid entries. The 'weekDay', 'startTime' and 'endTime' fields are required.")
        }

        if (!token) {
            throw new InvalidInputError("Invalid entry. 'Token' is required.")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (userTokenData.role !== USER_ROLE.ADMIN) {
            throw new UnauthorizedError("Invalid token. You need to be an administrator to register a band.")
        }

        const bandFromDB = await this.bandDatabase.selectBand(bandId)

        if (!bandFromDB) {
            throw new NotFoundError("Band not found, make sure id is correct.")
        }

        if (weekDay !== WEEK_DAY.SEXTA && weekDay !== WEEK_DAY.SABADO && weekDay !== WEEK_DAY.DOMINGO) {
            throw new InvalidInputError("Invalid week day. Day must be 'SEXTA', 'SABADO' or 'DOMINGO")
        }

        if (startTime < 8 || startTime >= 23) {
            throw new CustomError(400, "Showtime should be between 8h and 23h")
        }

        if (!Number.isInteger(startTime) || !Number.isInteger(endTime)) {
            throw new CustomError(400, "Showtime cannot be float")
        }

        const showFromDB = await this.showDatabase.selectShowBySchedule(weekDay)

        for (let show of showFromDB) {
            if (show.getStartTime() === startTime || (show.getStartTime() < startTime && show.getEndTime() > startTime)) {
                throw new ConflictError("There is already a show scheduled for that day and time")
            } else if (show.getStartTime() < endTime) {
                throw new ConflictError("There is already a show happening at this time")
            }
        }

        const id = this.IdGenerator.generate()

        const show = new Show(
            id,
            weekDay,
            startTime,
            endTime,
            bandId
        )

        await this.showDatabase.insertShow(show)
    }

    public getShowsByDate = async (weekDay: WEEK_DAY) => {
        
        if(!weekDay) {
            throw new InvalidInputError("Invalid entry. 'weekDay' is required")
        }

        if (weekDay !== WEEK_DAY.SEXTA && weekDay !== WEEK_DAY.SABADO && weekDay !== WEEK_DAY.DOMINGO) {
            throw new InvalidInputError("Invalid week day. Day must be 'SEXTA', 'SABADO' or 'DOMINGO")
        }

        const result = await this.showDatabase.selectShowsByWeekDay(weekDay)

        return result
    }

}