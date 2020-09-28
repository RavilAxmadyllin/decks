import {InferActionTypes} from '../../../../entites/entites'
import {Dispatch} from 'redux';
import {recoveryAPI} from '../api/recoveryAPI';

const initialState = {
    loading: false,
    error: '',
    success: false
}
type RecoveryType = typeof initialState
type RecoveryActions = InferActionTypes<typeof actions>
export const recoveryReducer = (state:RecoveryType = initialState, action: RecoveryActions) => {
    switch (action.type) {
        case 'RECOVERY/REDUCER':
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

const actions = {
    recoveryPayload: (loading: boolean, error: string, success: boolean) =>({type: 'RECOVERY/REDUCER', payload: {
            loading, error, success
        }})
}

export const recoveryThunk = (email: string) => {
    return async (dispatch: Dispatch<RecoveryActions>) => {
        dispatch(actions.recoveryPayload(true, '', false))
        try {
            const html1 = "<a href='https://ravilaxmadyllin.github.io/decks/#/reset-password/"
            const html2 = ">reset-password-link</a>"
            const data = await recoveryAPI.sendRequest(email.toLowerCase(), html1, html2)
            dispatch(actions.recoveryPayload(false, '', data.success))
        }
        catch (e) {
            const err = e.response.data.error
            dispatch(actions.recoveryPayload(false, err, false))
        }
    }
}

export const newPassword = (token: string, password: string) => {
    return async (dispatch: Dispatch<RecoveryActions>) => {
        dispatch(actions.recoveryPayload(true, '', false))
        try {
            let result = await recoveryAPI.newPassword(token, password)
            dispatch(actions.recoveryPayload(false, '', result.success))
        }
        catch (e) {
            const err = e.response.data.error
            dispatch(actions.recoveryPayload(false, err, false))
        }


    }
}
