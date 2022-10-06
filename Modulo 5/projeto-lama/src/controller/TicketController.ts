import { Request, Response } from "express";
import { TicketBusiness } from "../business/TicketBusiness";
import { BuyTicketInputDTO } from "../types/buyTicketInputDTO";
import { TicketInputDTO } from "../types/ticketInputDTO";

export class TicketController {

    constructor (
        private ticketBusiness: TicketBusiness
    ) {}

    public createTicket = async (req: Request, res: Response) => {
        try {
            
            const token = req.headers.authorization as string
            const { ticketName, price, totalQuantity, showId } = req.body
            
            const newTicket: TicketInputDTO = {
                ticketName,
                price,
                totalQuantity,
                showId,
                token
            }

            await this.ticketBusiness.createTicket(newTicket)

            res.status(201).send({ message: "Ticket successfully registered" })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public buyTicket = async (req: Request, res: Response) => {
        try {
            
            const token = req.headers.authorization as string
            const { ticketName, ticketQuantity } = req.body
            
            const newBuy: BuyTicketInputDTO = {
                ticketName,
                ticketQuantity,
                token
            }

            await this.ticketBusiness.buyTicket(newBuy)

            res.status(201).send({ message: "Successful purchase" })
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}