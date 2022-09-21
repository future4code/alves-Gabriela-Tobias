import { app } from "./controller/app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.get("/all", userController.getAllUsers)
app.post("/signup", userController.signUp)
app.post("/login", userController.login)
app.delete("/user/:id", userController.deleteUser)