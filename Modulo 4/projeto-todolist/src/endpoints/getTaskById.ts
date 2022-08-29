import { Request, Response } from "express"
import selectTaskById from "../data/selectTaskById"

const getTaskById = async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        if (!id) {
            res.statusCode = 400
            throw new Error("Preencha o campo ID")
        }

        const task = await selectTaskById(Number(id))

        if (!task[0]) {
            res.statusCode = 404
            throw new Error("Tarefa não encontrada")
        }

        res.status(200).send(task[0])
    }
    catch (err: any) {
        if (res.statusCode == 200) {
            res.status(500).send(err.message)
        } else {
            res.status(res.statusCode).send(err.message)
        }
    }
}

export default getTaskById