import {InferActionTypes, ThunkActionType} from '../../../../entites/entites'
import {loginAPI} from '../api/loginAPI'
import {Dispatch} from 'redux'
import {AppPayloadType, payload} from '../../InitialApp/appReducer'

const initialState = {
    isAuth: false,
    profile: {
        name: null as string | null,
        id: null as string | null,
        avatar: null as string | null
    },
    success: false
}

export const loginReducer = (state: LoginType = initialState, action: LoginActionsType) => {
    switch (action.type) {
        case 'SET_PROFILE/REDUCER':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    name: action.name,
                    id: action.id,
                    avatar: action.avatar
                }
            }
        case 'AUTH_ME/LOGIN/REDUCER':
            return {
                ...state,
                isAuth: action.auth
            }
        default:
            return state
    }
}
// action creator
const actions = {
    setAthMe: (auth: boolean) => ({type: 'AUTH_ME/LOGIN/REDUCER', auth} as const),
    setProfile: (name: string | null, id: string | null, avatar: string | null) =>
        ({type: 'SET_PROFILE/REDUCER', name, id, avatar} as const)
}


//thunk
export const signIn = (email: string, password: string, rememberMe = false): LoginThunkType => {
    return async (dispatch) => {
        dispatch(payload(true, null))
        try {
            await loginAPI.signIn(email, password, rememberMe)
            dispatch(payload(false, null))
            await dispatch(authMe())
        } catch (e) {
            const err = e.response.data.error
            dispatch(payload(false, err))
        }
    }
}
export const authMe = (): LoginThunkType => async (dispatch) => {
    dispatch(payload(true, null))
    try {
        const data = await loginAPI.authMe()
        const {name, _id, avatar} = data
        dispatch(actions.setAthMe(true))
        dispatch(payload(false, null))
        dispatch(actions.setProfile(name, _id, avatar))

    } catch (e) {
        dispatch(payload(false, e.response.data.error))
    }
}
export const logout = () => async (dispatch: Dispatch) => {
    await loginAPI.signOut()
    dispatch(actions.setProfile(null, null, null))
    dispatch(actions.setAthMe(false))

}


//type
type LoginType = typeof initialState
type LoginActionsType = InferActionTypes<typeof actions>
type LoginThunkType = ThunkActionType<LoginActionsType | AppPayloadType>
