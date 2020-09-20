import React, {ChangeEvent, useEffect, useState} from 'react'
import {MessageType} from '../dal/userAPI'
import style from './Chat.module.scss'
import userPng from '../../../assets/avatar.png'
import {Button} from '../../../components/helpComponent/Button'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../bll/store'
import {getGeneralMessages, sendMessage} from '../bll/chatReducer'

export const Chat = () => {
    const {messages, initialDialog} = useSelector((state: AppStateType) => state.chat)
    const loading = useSelector((state: AppStateType) => state.app.isLoading)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGeneralMessages())
    }, [dispatch])

    const sendHandler = () => dispatch(sendMessage(value))
    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => setValue(event.currentTarget.value)

    return <div className={style.chatBlock}>
        <div className={style.wrapper}>
            {[...messages].reverse().map((m, i) => <DialogItem message={m} key={m.user_name + i}/>)}
        </div>
        {initialDialog && <>
            <textarea value={value} onChange={changeHandler}/>
            <Button name={'submit'} disabled={loading} onClick={sendHandler}/>
        </>}
    </div>
}

const DialogItem: React.FC<{ message: MessageType }> = ({message}) => {
    const avatar = message.avatar !== 'some avatar' ? message.avatar : null
    const messageDate = new Date(message.updated)
    const todayDate = new Date()
    const oneDay = 24 * 60 * 60 * 1000
    const diffDays = Math.round((todayDate.getTime() - messageDate.getTime()) / (oneDay))
    return (
        <div className={style.dialogItem}>
            <label>
                <img src={avatar || userPng} alt='user'/>
            </label>
            <div className={style.messageBody}>
                <h5>{message.user_name}<span>{diffDays} day ago</span></h5>
                <p>{message.message}</p>
            </div>
        </div>
    )
}
