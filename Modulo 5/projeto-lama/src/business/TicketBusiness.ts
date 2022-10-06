import { ShowDatabase } from "../data/ShowDatabase";
import { TicketDatabase } from "../data/TicketDatabase";
import { Buy } from "../model/Buy";
import { Ticket } from "../model/Ticket";
import { USER_ROLE } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BuyTicketInputDTO } from "../types/buyTicketInputDTO";
import { TicketInputDTO } from "../types/ticketInputDTO";
import { ConflictError } from "./errors/ConflictError";
import { CustomError } from "./errors/CustomError";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";
import { UnauthorizedError } from "./errors/UnauthorizedError";

export class TicketBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private ticketDatabase: TicketDatabase,
        private showDatabase: ShowDatabase,
        private authenticator: Authenticator
    ) { }

    public createTicket = async (newTicket: TicketInputDTO) => {

        const { ticketName, price, totalQuantity, showId, token } = newTicket

        if (!token) {
            throw new InvalidInputError("Invalid entry. 'Token' is required.")
        }

        if (!ticketName || !price || !totalQuantity || !showId) {
            throw new InvalidInputError("Invalid entries. The 'ticketName', 'price', 'totalQuantity' and 'showId' fields are required.")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (userTokenData.role !== USER_ROLE.ADMIN) {
            throw new UnauthorizedError("Invalid token. You need to be an administrator to create a ticket.")
        }

        const showFromDB = await this.showDatabase.selectShowById(showId)

        if (!showFromDB) {
            throw new NotFoundError("Show not found, make sure id is correct.")
        }

        // const ticketFromDB = await this.ticketDatabase.selectTicketByName(name)

        // if (ticketFromDB) {
        //     throw new ConflictError("Ticket already registered in the system")
        // }

        const id = this.idGenerator.generate()
        let soldQuantity

        const ticket = new Ticket(
            id,
            ticketName,
            price,
            totalQuantity,
            soldQuantity,
            showId
        )

        await this.ticketDatabase.insertTicket(ticket)
    }

    public buyTicket = async (newBuy: BuyTicketInputDTO) => {

        const { ticketName, ticketQuantity, token } = newBuy

        if (!token) {
            throw new InvalidInputError("Invalid entry. 'Token' is required.")
        }

        if (!ticketName || !ticketQuantity) {
            throw new InvalidInputError("Invalid entries. The 'ticketName' and 'ticketQuantity' fields are required.")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (!userTokenData) {
            throw new UnauthorizedError("You need to be a user to buy tickets")
        }

        const ticketFromDB = await this.ticketDatabase.selectTicketByName(ticketName)

        if (!ticketFromDB) {
            throw new NotFoundError("Ticket not found, make sure name ticket is correct.")
        }

        if (ticketFromDB.getTotalQuantity() < ticketQuantity) {
            throw new CustomError(400, `There are only ${ticketFromDB.getTotalQuantity()} tickets available for this show`)
        }

        const id = this.idGenerator.generate()

        const buy = new Buy (
            id,
            ticketName,
            ticketQuantity,
            userTokenData.id
        )

        await this.ticketDatabase.insertBuy(buy)

        const newTotalQuantity = ticketFromDB.getTotalQuantity() - ticketQuantity
        const newSoldQuantity = ticketFromDB.getSoldQuantity() + ticketQuantity

        await this.ticketDatabase.updateTicket(ticketName, newTotalQuantity, newSoldQuantity)
    }


}