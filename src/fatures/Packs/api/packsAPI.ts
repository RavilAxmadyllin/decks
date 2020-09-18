import {instance} from '../../../dal/api'

export type CardPack = {
    cardsCount: number
    grade: number
    name: string
    private: boolean
    rating: number
    shots: number
    user_id: string
    user_name: string
    _id: string
}
export type PacksType = {
    cardPacks: Array<CardPack>
    cardPacksTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    token: string
    error?: string
}
type DataType = {
    success: boolean
    token: string
    error?: string
}
export const packsAPI = {
    async getPacks(search: string, page = 1) {
        const packName = search ? `&packName=${search}`: ''
        const result = await instance
            .get<PacksType>(`/cards/pack?page=${page}${packName}&pageCount=6`)
        return result.data
    },
    async createPack(value: string) {
        const result = await instance.post<DataType>('/cards/pack', {
            cardsPack: {
                name: value
            }
        })
        return result.data
    },
    async deletePack(id:string) {
        const result = await instance.delete<DataType>(`/cards/pack?id=${id}`)
        return result.data
    },
    async updatePack(id:string, value: string) {
    const result = await instance.put<DataType>('/cards/pack',{
        cardsPack: {
            _id: id,
            name: value
        }
    })
        return result.data
    }
}
