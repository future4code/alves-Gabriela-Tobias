import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const userRouter = express.Router()

const userBussines = new UserBusiness(
    new IdGenerator(),
    new HashManager(),
    new UserDatabase(),
    new Authenticator()
)

const userController = new UserController(
    userBussines
)

userRouter.post("/signup", userController.signUp)
userRouter.post("/login", userController.login)