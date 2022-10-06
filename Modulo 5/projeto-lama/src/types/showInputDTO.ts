import { WEEK_DAY } from "../model/Show"

export type ShowInputDTO = {
    bandId: string,
    weekDay: WEEK_DAY,
    startTime: number,
    endTime: number,
    token: string
}