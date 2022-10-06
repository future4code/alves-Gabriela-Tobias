import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLE } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignUpInputDTO } from "../types/signUpInputDTO";
import { ConflictError } from "./errors/ConflictError";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";

export class UserBusiness {

    constructor (
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private userDatabase: UserDatabase,
        private authenticator: Authenticator
    ) {}

    public signUp = async (newUser: SignUpInputDTO) => {

        const { name, email, password, role } = newUser

        if (!name || !email || !password || !role) {
            throw new InvalidInputError("Invalid entries. The 'name', 'email', 'password' and 'role' fields are required.")
        }

        if (password.length < 6) {
            throw new InvalidInputError("Invalid password. Password must have at least 6 characters")
        }

        if (email.includes("@") === false) {
            throw new InvalidInputError("Invalid email. Email must contain @")
        }

        if (role !== USER_ROLE.NORMAL && role !== USER_ROLE.ADMIN) {
            throw new InvalidInputError("Invalid role. Role must be 'NORMAL' or 'ADMIN'")
        }

        const userFromDB = await this.userDatabase.selectUserByEmail(email)

        if (userFromDB) {
            throw new ConflictError("User email already registered in the system")
        }

        const id = this.idGenerator.generate()

        const cryptedPassword = this.hashManager.createHash(password)

        const user = new User(
            id,
            name,
            email,
            cryptedPassword,
            role
        )

        await this.userDatabase.insertUser(user)
        
        const token = this.authenticator.generateToken({
            id,
            role
        })
        
        return token
    }

    public login = async (input: LoginInputDTO) => {
        
        const { email, password } = input

        if (!email || !password) {
            throw new InvalidInputError(" Invalid entries. The 'email' and 'password' fields are required.")
        }

        const userFromDB = await this.userDatabase.selectUserByEmail(email)

        if (!userFromDB) {
            throw new NotFoundError("User not found, make sure email is correct.")
        }

        const isPasswordCorrect = this.hashManager.compareHash(password, userFromDB.getPassword())

        if (!isPasswordCorrect) {
            throw new NotFoundError("Invalid credentials, check your password!")
        }

        const token = this.authenticator.generateToken({
            id: userFromDB.getId(),
            role: userFromDB.getRole()
        })

        return token
    }
    
}