export enum WEEK_DAY {
    SEXTA = "SEXTA",
    SABADO = "SABADO",
    DOMINGO = "DOMINGO"
}

export class Show {

    constructor (
        private id: string,
        private weekDay: WEEK_DAY,
        private startTime: number,
        private endTime: number,
        private bandId: string
    ) {}

    public getId = (): string => {
        return this.id
    }

    public getWeekDay = (): WEEK_DAY => {
        return this.weekDay
    }

    public getStartTime = (): number => {
        return this.startTime
    }

    public getEndTime = (): number => {
        return this.endTime
    }
    
    public getBandId = (): string => {
        return this.bandId
    }

    static toShowModel(show: any): Show {
        return new Show(
            show.id,
            show.week_day,
            show.start_time,
            show.end_time,
            show.band_id
        )
    }
}