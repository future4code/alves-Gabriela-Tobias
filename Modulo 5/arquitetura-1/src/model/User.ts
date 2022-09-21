export enum USER_ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export interface UserInput {
    name: string
    email: string
    password: string
    role: USER_ROLE
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLE
    ) { }

    public getId = (): string => {
        return this.id
    }

    public getName = (): string => {
        return this.name
    }

    public getEmail = (): string => {
        return this.email
    }

    public getPassword = (): string => {
        return this.password
    }

    public getRole = (): USER_ROLE => {
        return this.role
    }
    
    public toUserModel = (): User => {
        return new User(
            this.id,
            this.name,
            this.email,
            this.password,
            this.role
        )
    }
}

