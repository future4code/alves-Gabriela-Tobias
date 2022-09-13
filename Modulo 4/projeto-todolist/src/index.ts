import express from "express";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";


const app =  express();
app.use(express.json());

app.put('/user',createUser)
app.get('/user/:id',getUserById)
app.post('/user/edit/:id',editUser)
app.put('/task',createTask)
app.get('/task/:id',getTaskById)


app.listen(3306,()=>{
    console.log(`server is running in localhost:3003`)
})