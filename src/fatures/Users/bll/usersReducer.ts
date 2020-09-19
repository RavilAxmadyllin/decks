import {chatAPI, UserType} from '../dal/chatAPI'
import {ThunkActionType} from '../../../entites/entites'
import Cookies from 'js-cookie'
import { setTotalPage } from '../../Search/bll/searchReducer'
import {AppPayloadType, payload} from '../../auth/InitialApp/appReducer'

const initialState = {
    users: [] as Array<UserType>
}
export const usersReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'USERS-REDUCER/SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default: return state
    }
}

const setUsersSuccess = (users: Array<UserType>) => ({type: 'USERS-REDUCER/SET_USERS', users} as const)

export const getUsers = (page: number):ThunkAction => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        const data = await chatAPI.getUsers(page)
        dispatch(setUsersSuccess(data.users))
        Cookies.set('token', data.token)
        dispatch(setTotalPage(data.usersTotalCount, page))
        dispatch(payload(false, null))

    }catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}

//type
type Actions = ReturnType<typeof setUsersSuccess>
type ThunkAction = ThunkActionType<Actions | AppPayloadType>
