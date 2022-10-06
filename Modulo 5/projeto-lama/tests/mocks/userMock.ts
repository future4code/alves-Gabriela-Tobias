import { User, USER_ROLE } from "../../src/model/User"


export const userMock = new User(
    "id_user_1",
    "user1",
    "user1@gmail.com",
    "user1password",
    USER_ROLE.NORMAL
)

export const adminUserMock = new User(
    "id_user_2",
    "user2",
    "user2@gmail.com",
    "user2password",
    USER_ROLE.ADMIN
) 