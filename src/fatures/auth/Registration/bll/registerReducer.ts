import {ThunkActionType} from '../../../../entites/entites';
import {regAPI} from '../api/regAPI';
import {AppPayloadType, payload} from '../../InitialApp/appReducer';

const initialState = {
    success: false
}


export const registerReducer = (state: InitialState = initialState, action: RegisterActionsType) => {
    switch (action.type) {
        case 'PAYLOAD/REGISTER/REDUCER':
            return {
                ...state, success: action.success
            }
        default:
            return state
    }
}
//action creator
export const setSuccess = (success: boolean) => ({type: 'PAYLOAD/REGISTER/REDUCER', success} as const)
//thunk
export const registerThunk = (email: string, password: string, confirmedPassword: string): ThunkRegisterType => {
    return async (dispatch) => {
        dispatch(payload(true, null))
        if (password !== confirmedPassword)
            dispatch(payload(false, 'Password is not match'))
        else if (email === '' || password === '' || confirmedPassword === '')
            dispatch(payload(false, 'All field is required!'))
        else if (password.length <= 7 || confirmedPassword.length <= 7)
            dispatch(payload(false, 'password must be more than 7 char!'))
        else if (!email.match(/^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i))
            dispatch(payload(false, 'Email is not valid!'))
        else {
            try {
                await regAPI.register(email, password)
                dispatch(setSuccess(true))
                dispatch(payload(false, null))

            } catch (e) {
                dispatch(payload(false, e.response.data.error))
            }
        }
    }
}

//type
type InitialState = typeof initialState
type ThunkRegisterType = ThunkActionType<RegisterActionsType | AppPayloadType>
type RegisterActionsType = ReturnType<typeof setSuccess>
