import {ThunkAction} from 'redux-thunk'
import {AppStateType} from '../bll/store'
import {Action} from 'redux'

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ThunkActionType<D extends Action> = ThunkAction<void, AppStateType, unknown, D>
