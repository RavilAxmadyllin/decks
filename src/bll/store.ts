import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer} from '../fatures/01-auth/Login/bll/loginReducer'
import {registerReducer} from '../fatures/01-auth/Registration/bll/registerReducer'
import {recoveryReducer} from '../fatures/01-auth/Forgot/bll/recoveryReducer'
import {packsReducer} from '../fatures/Packs/bll/packsReducer'
import {cardsReducer} from '../fatures/Cards/bll/cardsReducer'
import {searchReducer} from '../fatures/Search/bll/searchReducer'
import {appReducer} from '../fatures/01-auth/InitialApp/appReducer'

const rootReducer = combineReducers({
    app: appReducer,
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
