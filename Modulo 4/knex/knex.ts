import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';
import dotenv from 'dotenv';
import knex from 'knex';


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
});

app.get('/test', (req: Request, res: Response) => {
    res.send('Hello World!')
})
 
const getActors = async (): Promise<any> => {
    const result = await connection.select('*').from('Actor')
    return result
}

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.select('*').from('Actor').where('id', id)
    return result
}

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE '%${name}%'
    `)

    return result[0]
}

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as contagem FROM Actor WHERE gender = '${gender}'
    `)

    return result[0]
}

const createActor = async (id: string, name: string, salary: number, birth_date: string, gender: string, favorite_ice_cream_flavor?: string, type?: string): Promise<any> => {
    const result = await connection("Actor")
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: birth_date,
            gender: gender,
            favorite_ice_cream_flavor: favorite_ice_cream_flavor,
            type: type
        })

    return result
}

const updateActor = async (id: string, salary: number): Promise<any> => {
    const result = await connection("Actor")
        .update({
            salary: salary
        })
        .where('id', id)
        
    return result
}

const deleteActor = async (id: string): Promise<any> => {
    const result = await connection("Actor")
        .delete()
        .where('id', id)

    return result
}

const getAverageSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg(gender)
        .where('gender', gender)

    return result
}


const getMovies = async(): Promise<any> => {
    const result = await connection("Movies")
        .select('*')
        .limit(15)

    return result
}

const createMovie = async (id: string, name: string, synopsis: string, release_date: string, rating: number, playing_limit_date: string) => {
    const result = await connection("Movies")
        .insert({
            id: id,
            name: name,
            synopsis: synopsis,
            release_date: release_date,
            rating: rating,
            playing_limit_date: playing_limit_date
        })

    return result
}

const getMoviesByNameOrSynopsis = async (name: string, synopsis: string): Promise<any> => {
    const result = await connection("Movies")
        .select('*')
        .where('name', 'like', `%${name}%`)
        .orWhere('synopsis', 'like', `%${synopsis}%`)
        .orderBy('release_date', 'asc')

    return result
}

app.get('/actors', async (req: Request, res: Response) => {
    try {

        const result = await getActors()

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.post('/actors', async (req: Request, res: Response) => {
    try {

        const { id, name, salary, birth_date, gender, favorite_ice_cream_flavor, type } = req.body

        await createActor(id, name, salary, birth_date, gender, favorite_ice_cream_flavor, type)

        res.status(201).send("Ator criado com sucesso!")
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

app.put('/actors', async (req: Request, res: Response) => {
    try {

        const { id, salary } = req.body

        await updateActor(id, salary)

        res.status(200).send("Ator atualizado com sucesso!")

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

app.get('/actors/count', async (req: Request, res: Response) => {
    try {

        const gender: string = req.query.gender as string

        const result = await countActors(gender)
        
        res.status(200).send(result[0])
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

app.get('/actors/:id', async (req: Request, res: Response) => {
    try {

        const id: string = req.params.id

        if (!id) {
            res.statusCode = 400
            throw new Error('Id não informado')
        }

        const result = await getActorById(id)

        res.status(200).send(result[0])

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

app.delete('/actors/:id', async (req: Request, res: Response) => {
    try {

        const id: string = req.params.id

        const searchId = await getActorById(id)
        console.log(searchId)

        if (searchId.length == 0) {
            res.statusCode = 400
            throw new Error('ID não encontrado')
        }
        

        await deleteActor(id)

        res.status(200).send("Ator deletado com sucesso!")

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

app.post('/movies', async (req: Request, res: Response) => {
    try {

        const { id, name, synopsis, release_date, rating, playing_limit_date } = req.body

        await createMovie(id, name, synopsis, release_date, rating, playing_limit_date)

        res.status(201).send("Filme criado com sucesso!")
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

app.get('/movies/all', async (req: Request, res: Response) => {
    try {
        
        const result = await getMovies()

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})



    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
            const address = server.address() as AddressInfo;
            console.log(`Server is running in http://localhost:${address.port}`);
        } else {
            console.error(`Failure upon starting server.`);
        }
    });