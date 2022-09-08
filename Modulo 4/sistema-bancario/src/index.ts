import express, { Express, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
   try {
      const { name, CPF, dateOfBirthAsString } = req.body

      const [day, month, year] = 
      dateOfBirthAsString.split("/")

      const dateOfBirth: Date =
       new Date(`${year}-${month}-${day}`)

      const ageInMilisseconds: number =
       Date.now() - dateOfBirth.getTime()

      const ageInYears: number = 
      ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

      if (ageInYears < 18){
         res.statusCode = 406
         throw new Error("Deve ser maior de 18 anos") 
      }

         accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
         })

      res.status(201).send("Conta criada")
   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
})

app.get("/users/all", (req: Request, res: Response) => {
   try {
      if (!accounts.length) {
         res.statusCode = 404
         throw new Error("Conta não encontrada")
      }

      res.status(200).send(accounts)
   } catch (err) {
      res.send(err.message)
   }
})

app.listen(3003, () => {
   console.log("Servidor rodando na porta 3003")
  
})