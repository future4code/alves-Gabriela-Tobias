export class Buy {

    constructor (
        private id: string,
        private nameTicket: string,
        private ticketQuantity: number,
        private userId: string
    ) {}

    public getId = (): string => {
        return this.id
    }

    public getTicketQuantity = (): number => {
        return this.ticketQuantity
    }

    public getNameTicket = (): string => {
        return this.nameTicket
    }

    public getUserId = (): string => {
        return this.userId
    }

    static toBuyModel = (buy: any): Buy => {
        return new Buy (
            buy.id,
            buy.ticket_quantity,
            buy.name_ticket,
            buy.user_id
        )
    }
}