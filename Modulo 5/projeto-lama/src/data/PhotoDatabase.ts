import { Photo } from "../model/Photo";
import { BaseDatabase } from "./BaseDatabase";

export class PhotoDatabase extends BaseDatabase {

    protected static TABLE_NAME = "lama_photos"

    public insertPhoto = async (photoInput: Photo): Promise<void> => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: photoInput.getId(),
                    photo: photoInput.getPhoto(),
                    show_id: photoInput.getShowId()
                })
                .into(PhotoDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectPhotosByShowId = async (id: string): Promise<Photo[] | undefined> => {
        try {
            
            const result = await BaseDatabase.connection()
                .select('*')
                .from(PhotoDatabase.TABLE_NAME)
                .where({
                    show_id: id
                })

            return result && result.map((photo) => {
                return Photo.toPhotoModel(photo)
            })
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}