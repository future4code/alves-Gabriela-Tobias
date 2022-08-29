export type User = {
    name?:string,
    nickname?:string,
    email?:string
}
export type UserData = {
    id:string,
    nickname:string
}
export type UserInsert = {
    id:string
    name:string,
    nickname:string,
    email:string
}