import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateID } from "../services/GenerateID";
import { HashManager } from "../services/HashManager";
import { authenticationData, ROLE_TYPE } from "../types";

export class UserController {

    public createUser = async (req: Request, res: Response) => {
        try {
            // Exercício 3 c) - inclui a coluna role no body da requisição
            const { email, password, role } = req.body

            if (!email || !password || !role) {
                res.statusCode = 400
                throw new Error("Dados insuficientes, passe email, senha e role")
            }

            if (email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Email inválido, acrescente @")
            }

            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("Senha muito curta, mínimo 6 caracteres")
            }

            // Exercício 3 c) verifica se role é um valor válido
            if (role !== "normal" && role !== "admin") {
                res.statusCode = 400
                throw new Error("Role inválida, insira normal ou admin")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            if (user) {
                res.statusCode = 400
                throw new Error("Usuário já existe")
            }

            const id = new GenerateID().id()

            // Exercício 2) b. - Criação de hash da senha
            const cypherPassword = new HashManager().createHash(password)

            // Exercício 3 c) - criar nova instância de User passando o role
            const newUser = new User(
                id,
                email,
                cypherPassword,
                role
            )

            await userDB.insertUser(newUser)

            // Exercício 3 c) - criar nova instância de Authenticator passando agora o role junto com o id do usuário para geração do token
            const token = new Authenticator().generateToken({
                id,
                role
            })

            res.status(200).send({
                message: "Usuário criado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("Dados insuficientes, passe email e senha")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            // Exercício 2) c. - Comparação de hash da senha
            const passwordIsCorrect = new HashManager().compareHash(password, user.getPassword())
            console.log(passwordIsCorrect)

            if (!passwordIsCorrect) {
                res.statusCode = 400
                throw new Error("credenciais inválidas")
            }

            // Exercício 3 d) - criar nova instância de Authenticator passando agora o role junto com o id do usuário para geração do token
            const token = new Authenticator().generateToken({
                id: user!.getId(),
                role: user!.getRole()
            })

            res.status(200).send({
                message: "Usuário logado com sucesso",
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    public getUserProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("Insira um token")
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido")
            }

            // Exercício 4 a) Verificação de role, se role for diferente de normal, retorna erro de acesso negado
            if (tokenData.role !== ROLE_TYPE.NORMAL) {
                res.statusCode = 403
                throw new Error("Não autorizado, role inválido, precisa ser normal")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            // Exercício 4 a) Envio de dados do usuário, agora com o role
            res.status(200).send({
                id: user.getId(),
                email: user.getEmail(),
                role: user.getRole()
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    // Desafio 5) - Método para deletar um usuário
    public removeUser = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { id } = req.params

            if (!token || !id) {
                res.statusCode = 400
                throw new Error("Insira um token e um id")
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido")
            }

            if (tokenData.role !== ROLE_TYPE.ADMIN) {
                res.statusCode = 403
                throw new Error("Não autorizado, precisa ser admin")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            await userDB.deleteUser(id)

            res.status(200).send({ message: "Usuário removido com sucesso" })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    // Desafio 6) - Método para exibir usuário logado
    public getUserLogged = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("Insira um token")
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token) as authenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            res.status(200).send({
                id: user.getId(),
                email: user.getEmail(),
                role: user.getRole()
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}