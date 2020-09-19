import axios from 'axios'
import Cookies from 'js-cookie'

const baseURL = 'https://cards-nya-back.herokuapp.com/1.0/'
export const inst = axios.create({
    baseURL
})


export const chatAPI = {
    async getUsers(page: number) {
        const token = Cookies.get('token')
        const result = await inst.get<ResponseUserType>(`social/users?token=${token}&page=${page}&pageCount=7`)
        return result.data
    },
    async sendMessage(token: string, message: string) {
        const result = await inst.post('social/general/message', {token, message})
        return result.data
    },
    async generalMessages(token: string) {
        const result = await inst.get<ResponseMessagesType>(`/social/general/message?token=${token}`)
        return result.data
    },
    async getUser(token: string, id: string) {
        const result = await inst.get<FindUserType>(`/social/user?token=${token}&id=${id}`)
        debugger
        return result.data
    }
}


//type

type ResponseUserType = {
    maxPublicCardPacksCount: number
    minPublicCardPacksCount: number
    page: number
    pageCount: number
    token: string
    usersTotalCount: number
    users: Array<UserType>
}
export type UserType = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    updated: string
    _id: string
}
type ResponseMessagesType = {
    token: string
    generalChatMessages: Array<MessageType>
}
type MessageType = {
    created: string
    isAdmin: boolean
    message: string
    updated: string
    user_id: string
    user_name: string
}
type FindUserType = {
    token: string
    user: UserType
}
