import { Buy } from "../model/Buy";
import { Ticket } from "../model/Ticket";
import { BaseDatabase } from "./BaseDatabase";

export class TicketDatabase extends BaseDatabase {

    private static TABLE_NAME = {
        ticket: "lama_tickets",
        soldTicket: "lama_solds_tickets"
    }

    public insertTicket = async (ticket: Ticket) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: ticket.getId(),
                    ticket_name: ticket.getTicketName(),
                    price: ticket.getPrice(),
                    total_quantity: ticket.getTotalQuantity(),
                    sold_quantity: ticket.getSoldQuantity(),
                    show_id: ticket.getShowId()
                })
                .into(TicketDatabase.TABLE_NAME.ticket)


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectTicketByName = async (ticketName: string): Promise<Ticket | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(TicketDatabase.TABLE_NAME.ticket)
                .where({ ticket_name: ticketName })

            return result[0] && Ticket.toTicketModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public updateTicket = async (ticketName: string, newTotalQuantity: number, newSoldQuantity: number) => {
        try {
            await BaseDatabase.connection()
                .update({
                    total_quantity: newTotalQuantity,
                    sold_quantity: newSoldQuantity
                })
                .where({
                    ticket_name: ticketName
                })
                .into(TicketDatabase.TABLE_NAME.ticket)
            
        } catch (error: any) {
            
        }
    }


    insertBuy = async (buy: Buy) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: buy.getId(),
                    name_ticket: buy.getNameTicket(),
                    ticket_quantity: buy.getTicketQuantity(),
                    user_id: buy.getUserId()
                })
                .into(TicketDatabase.TABLE_NAME.soldTicket)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}