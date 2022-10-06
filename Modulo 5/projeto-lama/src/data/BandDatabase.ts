import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "lama_bands"

    public selectBandByName = async (name: string): Promise<Band | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(BandDatabase.TABLE_NAME)
                .where({ name })

            return result[0] && Band.toBandModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectBand = async (search: string): Promise<Band | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(BandDatabase.TABLE_NAME)
                .where({ id: search })
                .orWhere({ name: search })

            return result[0] && Band.toBandModel(result[0])

        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public insertBand = async (band: Band) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: band.getId(),
                    name: band.getName(),
                    music_genre: band.getMusicGenre(),
                    responsible: band.getResponsible()
                })
                .into(BandDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


}