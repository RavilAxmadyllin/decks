import {instance} from '../../../../dal/api'

export const regAPI  = {
    async register(email: string, password: string) {
        const result = await instance.post('/auth/register', {email, password})
        return  result.data
    }
}
