import {CardPack, packsAPI} from '../api/packsAPI'
import {InferActionTypes, ThunkActionType} from '../../../entites/entites'
import {setTotalPage} from '../../Search/bll/searchReducer'
import {AppPayloadType, payload} from '../../01-auth/InitialApp/appReducer'

const initialState = {
    packs: [] as Array<CardPack>,
}
export const packsReducer = (state:InitialState = initialState, action: PacksActionsType) => {
    switch (action.type) {
        case 'PACKS_REDUCER/SET_PACKS':
            return {...state, packs: [...action.packs]}
        default:
            return state
    }
}


export const actions = {
    setPacksSuccess: (packs: Array<CardPack>) => ({type: 'PACKS_REDUCER/SET_PACKS', packs} as const)
}

export const getPacks = (search = '', page = 1): ThunkPacksType => async (dispatch, getState) => {
    dispatch(payload(true, null))
    try {
        const data = await packsAPI.getPacks(search, page)
        dispatch(setTotalPage(data.cardPacksTotalCount, page))
        dispatch(actions.setPacksSuccess(data.cardPacks))
        dispatch(payload(false, null))
    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
export const createPack = (value: string): ThunkPacksType => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        await packsAPI.createPack(value)
        dispatch(payload(false, null))
        dispatch(getPacks())
    } catch
        (e) {
        dispatch(payload(true, e.response.data.error))
    }
}
export const updatePack = (id: string, value: string): ThunkPacksType => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        await packsAPI.updatePack(id, value)
        dispatch(payload(false, null))
        dispatch(getPacks())
    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
export const deletePack = (id: string): ThunkPacksType => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        await packsAPI.deletePack(id)
        dispatch(payload(false, null))
        dispatch(getPacks())
    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
type InitialState = typeof initialState
type ThunkPacksType = ThunkActionType<PacksActionsType | AppPayloadType>
type PacksActionsType = InferActionTypes<typeof actions>
