import { Request, Response } from 'express'
import selectUserById from '../data/selectUserById'

const getUserById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const user = await selectUserById(Number(id))

        if (!user[0]) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(user[0])
    }

    catch (err: any) {
        if (res.statusCode == 200) {
            res.status(500).send(err.message)
        } else {
            res.status(res.statusCode).send(err.message)
        }
    }
}

export default getUserById