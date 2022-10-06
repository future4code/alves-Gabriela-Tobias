import express from "express"
import { TicketBusiness } from "../business/TicketBusiness"
import { TicketController } from "../controller/TicketController"
import { ShowDatabase } from "../data/ShowDatabase"
import { TicketDatabase } from "../data/TicketDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const ticketRouter = express.Router()

const ticketBusiness = new TicketBusiness(
    new IdGenerator(),
    new TicketDatabase(),
    new ShowDatabase(),
    new Authenticator()
)

const ticketController = new TicketController(
    ticketBusiness
)

ticketRouter.post("/", ticketController.createTicket)
ticketRouter.post("/purchase", ticketController.buyTicket)
