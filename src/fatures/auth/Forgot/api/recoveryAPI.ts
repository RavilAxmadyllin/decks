import {instance} from '../../../../dal/api'

export const recoveryAPI = {
    async sendRequest(email: string, html1: string, html2: string) {
        const result = await instance.post('/auth/forgot', {email, html1, html2})
        return result.data
    },
    async newPassword(token: string, password: string) {
        const result = await instance.post('/auth/set-new-password', {token, password})
        return result.data
    }
}
