import { app } from "./controller/app";
import { bandRouter } from "./router/BandRouter";
import { photoRouter } from "./router/PhotoRouter";
import { showRouter } from "./router/ShowRouter";
import { ticketRouter } from "./router/TicketRouter";
import { userRouter } from "./router/UserRouter";


app.use("/user", userRouter)
app.use("/band", bandRouter)
app.use("/show", showRouter)
app.use("/ticket", ticketRouter)
app.use("/photo", photoRouter)