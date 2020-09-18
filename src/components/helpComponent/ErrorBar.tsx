import React from 'react'
import style from './ErrorBar.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../bll/store'
import { payload } from '../../fatures/01-auth/InitialApp/appReducer'
export const ErrorBar = () => {
    const {error} = useSelector( (state: AppStateType) => state.app)
    const dispatch = useDispatch()
    const closeHandler = () => {
        dispatch(payload(false, null))
    }
    if(!error) {
        return <></>
    }
    return (
        <div className={style.wrapper}>
            <div className={style.errorMessage}>
                <div>{error}</div>
                <button onClick={closeHandler}>X</button>
            </div>
        </div>
    )
}
