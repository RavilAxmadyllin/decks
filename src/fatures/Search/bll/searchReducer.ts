import {InferActionTypes, ThunkActionType} from '../../../entites/entites'
import {getPacks} from '../../Packs/bll/packsReducer'

const initialState = {
    settings: {
        search: '',
        page:1,
        total: 10
    }
}

export const searchReducer = (state:InitialStateType = initialState, action: ActionsSearchType) => {
    switch (action.type) {
        case 'SEARCH_REDUCER/SET_SEARCH':
        case 'SEARCH_REDUCER/SET_CURRENT_PAGE':
        case 'SEARCH_REDUCER/SET_TOTAL_COUNT':return {
            ...state,
            settings: {...state.settings, ...action.payload}
        }
        default: return state
    }
}
// action creator
export const actions = {
    setSearch: (search: string) => ({type:'SEARCH_REDUCER/SET_SEARCH', payload: {search}} as const),
    setCurrentPage: (page: number) => ({type:'SEARCH_REDUCER/SET_CURRENT_PAGE', payload:{page} } as const),
    setTotalCount: (total: number) => ({type:'SEARCH_REDUCER/SET_TOTAL_COUNT', payload:{total} } as const)
}

// thunk
export const setTotalPage = (total: number, page: number):ThunkSearchType =>(dispatch) => {
    dispatch(actions.setTotalCount(total))
    dispatch(actions.setCurrentPage(page))
}
export const setSearch = (value: string):ThunkSearchType => async (dispatch) => {
    dispatch(actions.setSearch(value))
    dispatch(getPacks(value))
}
export const setPage = (num: number):ThunkSearchType => async (dispatch, getState) => {
    dispatch(actions.setCurrentPage(num))
}

// type
type InitialStateType = typeof initialState
type ActionsSearchType = InferActionTypes<typeof actions>
type ThunkSearchType = ThunkActionType<ActionsSearchType>
