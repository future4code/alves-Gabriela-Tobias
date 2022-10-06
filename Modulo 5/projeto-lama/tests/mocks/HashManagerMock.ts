export class HashManagerMock {
    
    public createHash = (senha: string): string => {
        return "hash"
    }

    public compareHash = (senha: string, hash: string): boolean => {
        return senha === hash
    }
}