import axios from "axios";
import { baseURL } from "./baseURL";



async function getSubscribers(): Promise<any[]> {
    const response = await axios
        .get(`${baseURL}/subscribers`)

    return response.data
}

const getSubscribersArrow = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}

type user = {
    id: string;
    name: string;
    email: string;
}

const getSubscribersCorrect = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        }
    })
}

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    })
}

const sendNotifications = async (
    users: user[],
    message: string
): Promise<void> => {

    try {
        for (const user of users) {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message
            });
        }

        console.log("teste")
    } catch {
        console.log("Error")
    }
}

const sendNotificationsAllPromises = async (
    users: user[],
    message: string
): Promise<void> => {

    try {
        const promises = users.map(user => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message,
            })
        })

        await Promise.all(promises);
        console.log(`Notificações enviadas`)

    } catch {
        console.log("Erro");
    }
};

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers()
        const subscribersArrow = await getSubscribersArrow()
        const subscriberCorrect = await getSubscribersCorrect()
        createNews("Brasil conquista hexa no catar", "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás", Date.now())
        sendNotifications(subscriberCorrect, "Olá, há uma nova notícia em nosso site")
        sendNotificationsAllPromises(subscriberCorrect, "Olá, sou uma notificação nova")
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()
