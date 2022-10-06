import { User } from "../../src/model/User"
import { adminUserMock, userMock } from "./userMock"


export class UserDatabaseMock {

    public async insertUser(user: User): Promise<void> {
        
    }

    public async selectUserByEmail(email: string): Promise<User | undefined> {
        switch (email) {
            case "user1@gmail.com":
                return userMock
            case "user2@gmail.com":
                return adminUserMock
            default:
                return undefined
        }
    }
}