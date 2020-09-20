import {MessageType, userAPI} from '../dal/userAPI'
import {ThunkActionType} from '../../../entites/entites'
import Cookies from 'js-cookie'
import {AppPayloadType, payload} from '../../auth/InitialApp/appReducer'

const initialState = {
    messages: [] as Array<MessageType>,
    initialDialog: false
}
export const chatReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case 'CHAT-REDUCER/SET-MESSAGES':
            return {...state, messages: [...action.messages]}
        case 'CHAT-REDUCER/MESSAGE':
            return {...state, messages: [action.body, ...state.messages]}
        case 'CHAT-REDUCER/INITIALDIALOG':
            return {...state, initialDialog: action.value}
        default:
            return state
    }
}
const setMessagesSuccess = (messages: Array<MessageType>) => ({type: 'CHAT-REDUCER/SET-MESSAGES', messages}) as const
const sendMessageSuccess = (body: MessageType) => ({type: 'CHAT-REDUCER/MESSAGE', body}) as const
const initialDialog = (value: boolean) => ({type: 'CHAT-REDUCER/INITIALDIALOG', value}) as const

export const getGeneralMessages = (): ThunkActions => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        let token = Cookies.get('token')
        if (token) {
            const result = await userAPI.generalMessages(token)
            dispatch(initialDialog(true))
            dispatch(payload(false, null))
            dispatch(setMessagesSuccess(result.generalChatMessages))
            Cookies.set('token', result.token)
        }

    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
export const sendMessage = (body: string): ThunkActions => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        let token = Cookies.get('token')
        if (token) {
            debugger
            const result = await userAPI.sendMessage(token, body)
            Cookies.set('token', result.token)
            dispatch(payload(false, null))
            dispatch(sendMessageSuccess(result.newGeneralChatMessage))
        }

    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}


//type
type Actions = ReturnType<typeof setMessagesSuccess>
    | ReturnType<typeof sendMessageSuccess>
    | ReturnType<typeof initialDialog>
type ThunkActions = ThunkActionType<Actions | AppPayloadType>
