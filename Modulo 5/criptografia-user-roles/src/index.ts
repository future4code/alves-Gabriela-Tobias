import { app } from "./app"
import { UserController } from "./endpoints/UserController"

const userController = new UserController()

app.get("/user", userController.getUserLogged)
app.get("/user/profile", userController.getUserProfile)
app.post("/user/signup", userController.createUser)
app.post('/user/login', userController.login)
app.delete('/user/:id', userController.removeUser)