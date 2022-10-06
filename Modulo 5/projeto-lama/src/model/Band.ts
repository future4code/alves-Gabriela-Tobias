export class Band {

    constructor (
        private id: string,
        private name: string,
        private musicGenre: string,
        private responsible: string
    ) {}

    public getId = (): string => {
        return this.id
    }
    
    public getName = (): string => {
        return this.name
    }

    public getMusicGenre = (): string => {
        return this.musicGenre
    }

    public getResponsible = (): string => {
        return this.responsible
    }

    static toBandModel(band: any): Band {
        return new Band(
            band.id,
            band.name,
            band.music_genre,
            band.responsible
        )
    }
}