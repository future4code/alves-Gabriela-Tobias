import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignUpInputDTO } from "../types/signUpInputDTO";

export class UserController {

    constructor (
        private userBusiness: UserBusiness
    ) {}
    
    public signUp = async (req: Request, res: Response) => {
        try {
            
            const { name, email, password, role } = req.body

            const newUser: SignUpInputDTO = {
                name,
                email,
                password,
                role
            }

            const token = await this.userBusiness.signUp(newUser)

            res.status(201).send({message: "User successfully registered", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            
            const { email, password } = req.body

            const input: LoginInputDTO = {
                email,
                password,
            }

            const token = await this.userBusiness.login(input)

            res.status(200).send({message: "User successfully logged in", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}