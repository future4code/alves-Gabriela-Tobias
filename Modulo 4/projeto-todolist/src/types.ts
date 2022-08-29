export type Task = {
    title: string,
    description: string,
    deadline: string,
    status: string,
    authorId: string
}
export type taskData = {
    id: string
    title: string,
    description: string,
    deadline: string,
    status: boolean,
    authorId: string
}
export type InsertTaks = {
    id: string
    title: string,
    description: string,
    deadline: string,
    status: string,
    authorId: string
}

export enum TypeStatus {
    TO_DO = "TO_DO",
    DOING = "DOING",
    DONE = "DONE"
}