import { UserBusiness } from "../src/business/UserBusiness"
import { Authenticator } from "../src/services/Authenticator"
import { SignUpInputDTO } from "../src/types/signUpInputDTO"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"


const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashManagerMock(),
    new UserDatabaseMock(),
    new AuthenticatorMock() as Authenticator
)

describe("Testando o signup", () => {
    test("Dever retornar erro quando o nome está vazio", async () => {
        try {

            const user: SignUpInputDTO = {
                name: "",
                email: "muh@labenu.com.br",
                password: "123456",
                role: "NORMAL"
            }

            await userBusinessMock.signUp(user)

        } catch (error: any) {
            expect(error.message).toEqual("Invalid entries. The 'name', 'email', 'password' and 'role' fields are required.")
            expect(error.statusCode).toBe(417)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro quando o email é inválido, preenchido sem o caracter de 'arroba'", async () => {
        try {

            const user: SignUpInputDTO = {
                name: "Murilo",
                email: "muhlabenu.com.br",
                password: "123456",
                role: "NORMAL"
            }

            await userBusinessMock.signUp(user)

        } catch (error: any) {
            expect(error.message).toEqual("Invalid email. Email must contain @")
            expect(error.statusCode).toBe(417)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro quando a senha é inválida, tamanho menor que 6 caracteres", async () => {
        try {

            const user: SignUpInputDTO = {
                name: "Murilo",
                email: "muh@labenu.com.br",
                password: "1234",
                role: "NORMAL"
            }

            await userBusinessMock.signUp(user)

        } catch (error: any) {
            expect(error.message).toEqual("Invalid password. Password must have at least 6 characters")
            expect(error.statusCode).toBe(417)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro quando recebe uma role não existente", async () => {
        try {

            const user: SignUpInputDTO = {
                name: "Murilo",
                email: "muh@labenu.com.br",
                password: "123456",
                role: "charizard"
            }

            await userBusinessMock.signUp(user)

        } catch (error: any) {
            expect(error.message).toEqual("Invalid role. Role must be 'NORMAL' or 'ADMIN'")
            expect(error.statusCode).toBe(417)
        } finally {
            expect.assertions(2)
        }
    })

    test("Deve retornar erro ao tentar cadastrar um usuário já existente na plataforma", async () => {
        try {

            const user: SignUpInputDTO = {
                name: "user1",
                email: "user1@gmail.com",
                password: "user1password",
                role: "NORMAL"
            }

            await userBusinessMock.signUp(user)

        } catch (error: any) {
            expect(error.message).toEqual("User email already registered in the system")
            expect(error.statusCode).toBe(409)
        } finally {
            expect.assertions(2)
        }
    })
    test("Sucesso no cadastro", async () => {
        try {

            const user: SignUpInputDTO = {
                name: "Murilo",
                email: "muh@labenu.com.br",
                password: "123456",
                role: "ADMIN"
            }

            const token = await userBusinessMock.signUp(user)
            expect(token).toEqual("token")
            
        } catch (error: any) {
            console.log(error)
        } finally {
            expect.assertions(1)
        }
    })
})
