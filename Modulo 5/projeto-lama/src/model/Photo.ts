export class Photo {
    
    constructor (
        private id: string,
        private photo: string,
        private showId: string
    ) {}

    public getId = (): string => {
        return this.id
    }

    public getPhoto = (): string => {
        return this.photo
    }

    public getShowId = (): string => {
        return this.showId
    }

    static toPhotoModel = (photo: any): Photo => {
        return new Photo (
            photo.id,
            photo.photo,
            photo.show_id
        )
    }
}