import { Show, WEEK_DAY } from "../model/Show";
import { ShowWeekDay } from "../types/ShowWeekDay";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {

    private static TABLE_NAME = "lama_shows"

    public selectShowBySchedule = async (weedDay: WEEK_DAY): Promise<Show[]> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(ShowDatabase.TABLE_NAME)
                .where({ week_day: weedDay })

            return result && result.map((show) => {
                return Show.toShowModel(show)
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public insertShow = async (show: Show) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: show.getId(),
                    week_day: show.getWeekDay(),
                    start_time: show.getStartTime(),
                    end_time: show.getEndTime(),
                    band_id: show.getBandId()
                })
                .into(ShowDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectShowsByWeekDay = async (weedDay: WEEK_DAY) => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(ShowDatabase.TABLE_NAME)
                .join("lama_bands", "lama_bands.id", "lama_shows.band_id")
                .where({ week_day: weedDay })
                .orderBy("start_time", "asc")

            return {
                weedDay: weedDay, shows: result.map((show): ShowWeekDay => {
                    return {
                        startTime: show.start_time,
                        bandName: show.name,
                        musicGenre: show.music_genre
                    }
                })
            }

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectShowById = async (showId: string) => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(ShowDatabase.TABLE_NAME)
                .where({
                    id: showId
                })

            return result[0] && Show.toShowModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}