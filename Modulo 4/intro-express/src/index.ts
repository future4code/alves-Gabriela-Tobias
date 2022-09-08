import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// 1
app.get("/", (req, res) => {          
    res.send("Olár")
})

app.listen(3003, () => {
    console.log("Servidô rodano no http://localhost:3003")
});

// 2

type User = {
    id: string,
    name: string,
    email: string,
    website: string
    
}

//3

const users: User[] = [
   
    {
        id: "ndsagrgt-dsfrwfds-fsdntfbf-gutrvbcd",
        name: "Google",
        email: "Google@gmail.com",
        website: "google.com.br"
    },
    {
        id: "hgilpewj-fjdvojiwf-enwjnfmd-wvnirtfd",
        name: "Amazon",
        email: "amazon@amazon.com",
        website: "amazon.com.br"
    },
    {
        id: "batatata-jhrmrenj-rewjknfe-hwrihewn",
        name: "Mercado livre",
        email: "mercadolivre@mercadolivre.com",
        website: "mercadolivre.com.br"
    },
    {
        id: "dsaprwen-bmromrfw-kpfqwnefe-wkfpewmf",
        name: "Microsoft",
        email: "microsoft@microsoft.com",
        website: "microsoft.com.br"
    }

]


//4
app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Erro")
    }

    res.status(201).send(users)
})

//5
type Post  = {
    id: string,
    title: string,
    body: string,
    userId: string
}

//6

const posts: Post[] = [
    {
        id: "5678910-202523-3453-12345",
        title: "Google ",
        body: "GoogleGloglinhogoGlao",
        userId: "ndsagrgt-dsfrwfds-fsdntfbf-gutrvbcd"
        },
    {
        id: "202523-232435-12345-5678910",
        title: "Amazon",
        body: "olha o cara mais rico do mundo aq",
        userId: "hgilpewj-fjdvojiwf-enwjnfmd-wvnirtfd"
    },
    {
        id: "5678910-12345-676767-202523",
        title: "Mercado livre livre",
        body: "texto Mercado livre texto Mercado livre",
        userId: "batatata-jhrmrenj-rewjknfe-hwrihewn"
    },
    {
        id: "12345-5678910-2322343-202578",
        title: "Microsoft",
        body: "TextoMicrosoft,TextoMicrosoft,TextoMicrosoft",
        userId: "dsaprwen-bmromrfw-kpfqwnefe-wkfpewmf"
    }
]

//7
app.get("/posts", (req: Request, res: Response) => {

    if(!posts.length){
       res.status(401).send("Num tem :(")
    }

    res.status(201).send(posts)
})

//8

app.get("/post/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })
    if(!user) {
        return res.status(400).send("usuário Inválido")
     } else if(post.length === 0) {
        return res.status(400).send("Não tem resultados")
     }
        
        res.status(201).send(post)   
})


app.listen(3000, () => {

    console.log("Tá rodano lá no http://localhost:3000")
})


