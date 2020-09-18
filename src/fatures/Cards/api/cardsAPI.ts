import {instance} from '../../../dal/api'
export type CardType = {
    answer: string
    cardsPack_id: string
    comments: string
    grade: number
    more_id: string
    question: string
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    _id: string
}
export type ResponseCardType = {
    cards: Array<CardType>
    error: string
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: string
}
export const cardsAPI = {
    async getCards(packId: string, page = 1) {
        const id =  `?cardsPack_id=${packId}`
        const result = await instance
            .get<ResponseCardType>(`/cards/card${id}&page=${page}&pageCount=6`)
        return result.data
    },
    async createCard(id: string, question: string, answer = '') {
        const result = await instance.post('/cards/card', {
            card: {
                cardsPack_id: id,
                question,
                answer,
            }
        })
        return result.data
    },
    async deleteCard(id:string) {
        const result = await instance.delete(`/cards/card?id=${id}`)
        return result.data
    },
    async updateCard(id:string, question: string, answer = '') {
        const result = await instance.put('/cards/card',{
            card: {
                _id: id,
                question,
                answer,
            }

        })
        return result.data
    },
    async grateCard(id: string, grade: number) {
       await instance.put(`/cards/grade`, {card_id: id, grade})
    }
}
