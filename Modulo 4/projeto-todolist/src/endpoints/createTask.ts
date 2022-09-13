import { Request, Response } from "express"
import insertTaks from "../data/insertTaks"
import { NewTask } from "../types"

const createTask = async (req: Request, res: Response) => {

    try {

        const { title, description, limit_date, creator_user_id } = req.body

        const transformDate = limit_date.split("/")
        const newDate = new Date(`${transformDate[2]}-${transformDate[1]}-${transformDate[0]}`)

        if (!title || !description || !limit_date || !creator_user_id) {
            res.statusCode = 400
            throw new Error("Preencha todos os campos")
        }

        const newTask: NewTask = {
            title,
            description,
            limit_date: newDate,
            creator_user_id
        }

        await insertTaks(newTask)
        res.status(200).send("Tarefa criada com sucesso")
    }
    catch (err: any) {
        if (res.statusCode == 200) {
            res.status(500).send(err.message)
        } else {
            res.status(res.statusCode).send(err.message)
        }
    }
}

export default createTask