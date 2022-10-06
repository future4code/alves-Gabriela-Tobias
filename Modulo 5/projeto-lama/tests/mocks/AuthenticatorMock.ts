import { USER_ROLE } from "../../src/model/User";
import { authenticationData } from "../../src/types/authData";

export class AuthenticatorMock {

    public generateToken = (input: authenticationData): string => {
        return "token"
    };

    public getTokenData = (token: string) => {
        switch (token) {
            case "token de normal user":
                return {
                    id: "id_user_1",
                    role: USER_ROLE.NORMAL
                }
            case "token de admin user":
                return {
                    id: "id_user_2",
                    role: USER_ROLE.ADMIN
                }
        }
    }
}