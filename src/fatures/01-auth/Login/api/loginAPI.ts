import {instance} from '../../../../dal/api'


export const loginAPI = {
    async signIn(email: string, password: string, rememberMe: boolean) {
        const result = await instance.post('/auth/login', {email, password, rememberMe})
        return result.data
    },
    async authMe() {
        const result = await instance.post('/auth/me')
        return result.data
    },
    async signOut() {
        await instance.delete('/auth/me')

    }
}
