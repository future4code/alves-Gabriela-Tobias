import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "User_Arq"

    createUser = async (user: User): Promise<void> => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                })
                .into(UserDatabase.TABLE_NAME)
                
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getUserByEmail = async (email: string): Promise<User | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ email })

            return result[0] ? new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role) : undefined
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getUserById = async (id: string): Promise<User | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
                .where({ id })

            return result[0] ? new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role) : undefined
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectAllUsers = async (): Promise<User[]> => {
        try {
            const result = await BaseDatabase.connection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)

            return result.map((user: any) => new User(user.id, user.name, user.email, user.password, user.role))
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    deleteUser = async (id: string): Promise<void> => {
        try {
            
            await BaseDatabase.connection()
                .delete()
                .from(UserDatabase.TABLE_NAME)
                .where({ id })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}