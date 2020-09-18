import {cardsAPI, CardType} from '../api/cardsAPI'
import {setTotalPage} from '../../Search/bll/searchReducer'
import {AppPayloadType, payload} from '../../01-auth/InitialApp/appReducer'
import {ThunkActionType} from '../../../entites/entites'

const initialState = {
    cards: [] as Array<CardType>,
}
type InitialState = typeof initialState
export const cardsReducer = (state: InitialState = initialState, action: ActionCardsReducerType) => {
    switch (action.type) {
        case 'SET_CARDS/CARDS_REDUCER':
            return {...state, cards: [...action.cards]}
        default:
            return state
    }
}

const setCardsSuccess = (cards: Array<CardType>) => ({type: 'SET_CARDS/CARDS_REDUCER', cards} as const)

export const getCardThunk = (packId: string, page = 1): ThunkCardsType => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        const data = await cardsAPI.getCards(packId, page)
        dispatch(payload(false, null))
        dispatch(setTotalPage(data.cardsTotalCount, page))
        dispatch(setCardsSuccess(data.cards))
    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
export const addCard = (packId: string, question: string, answer: string): ThunkCardsType => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        await cardsAPI.createCard(packId, question, answer)
        dispatch(payload(false, null))
        dispatch(getCardThunk(packId))
    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
export const deleteCard = (cardId: string, packId: string): ThunkCardsType => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        await cardsAPI.deleteCard(cardId)
        dispatch(payload(false, null))
        dispatch(getCardThunk(packId))
    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
export const updateCard = (cardId: string, packId: string, question: string, answer: string): ThunkCardsType =>
    async (dispatch) => {
        dispatch(payload(true, null))
        try {
            await cardsAPI.updateCard(cardId, question, answer)
            dispatch(payload(false, null))
            dispatch(getCardThunk(packId))
        } catch (e) {
            dispatch(payload(false, e.response.data.error))
        }
    }
export const sendGrade = (id: string, grades: number): ThunkCardsType => async (dispatch) => {
    await cardsAPI.grateCard(id, grades)
}
type ActionCardsReducerType = ReturnType<typeof setCardsSuccess>
type ThunkCardsType = ThunkActionType<ActionCardsReducerType | AppPayloadType>
