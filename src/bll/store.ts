import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer} from '../fatures/auth/Login/bll/loginReducer'
import {registerReducer} from '../fatures/auth/Registration/bll/registerReducer'
import {recoveryReducer} from '../fatures/auth/Forgot/bll/recoveryReducer'
import {packsReducer} from '../fatures/Packs/bll/packsReducer'
import {cardsReducer} from '../fatures/Cards/bll/cardsReducer'
import {searchReducer} from '../fatures/Search/bll/searchReducer'
import {appReducer} from '../fatures/auth/InitialApp/appReducer'
import {usersReducer} from '../fatures/Users/bll/usersReducer'
import {chatReducer} from '../fatures/Users/bll/chatReducer'

const rootReducer = combineReducers({
    app: appReducer,
    users: usersReducer,
    chat: chatReducer,
    login: loginReducer,
    register: registerReducer,
    recovery: recoveryReducer,
    packs: packsReducer,
    card: cardsReducer,
    search: searchReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))
// @ts-ignore
window.store = store
