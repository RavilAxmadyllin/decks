import { authMe } from "../Login/bll/loginReducer"

const initialState = {
    initialApp: false,
    isLoading: false,
    error: null as string | null
}
export const appReducer = (state: InitialState = initialState, action: Actions) => {
    switch (action.type) {
        case 'INITIAL/APP/REDUCER':
        case 'PAYLOAD/APP/REDUCER':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export const payload = (isLoading: boolean, error: string | null) => {
    return {type: 'PAYLOAD/APP/REDUCER', payload: {isLoading, error}} as const
}
export const initialApp = (initialApp: boolean) => {
    return {type: 'INITIAL/APP/REDUCER', payload: {initialApp}} as const
}
export const initApp = () =>async (dispatch:any) => {
    await dispatch(authMe())
    dispatch(initialApp(true))
}
type InitialState = typeof initialState
export type AppPayloadType = ReturnType<typeof payload>
type Actions = AppPayloadType | ReturnType<typeof initialApp>
