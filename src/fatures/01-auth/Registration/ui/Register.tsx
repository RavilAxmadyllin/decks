import React, {ChangeEvent, useEffect, useState} from 'react'
import {Input} from '../../../../components/helpComponent/Input'
import {Button} from '../../../../components/helpComponent/Button'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../../bll/store'
import {registerThunk, setSuccess} from '../bll/registerReducer'
import {Redirect} from 'react-router-dom'
import {Preloader} from '../../../../components/helpComponent/Preloader'

export const RegisterForm = React.memo(() => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirm, setConfirm] = useState('')
    const dispatch = useDispatch()
    const {success} = useSelector((state: AppStateType) => state.register)
    const {isLoading} = useSelector((state: AppStateType) => state.app)

    const changeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const changePassHandler = (event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)
    const changeConfirmHandler = (event: ChangeEvent<HTMLInputElement>) => setConfirm(event.target.value)
    const onSendHandler = () => dispatch(registerThunk(email, pass, confirm))

    useEffect(() => {
        return () => {
            dispatch(setSuccess(false))
        }
    }, [dispatch])

    if (success) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={'page-form'}>
            <h2>Register</h2>
            <div>{isLoading && <Preloader/>}</div>
            <br/>
            <Input placeholder={'email'} onChange={changeEmailHandler} value={email}/>
            <Input placeholder={'password'} type={'password'} onChange={changePassHandler} value={pass}/>
            <Input placeholder={'confirm password'} type={'password'} onChange={changeConfirmHandler} value={confirm}/>
            <Button name={'send'} onClick={onSendHandler} disabled={isLoading}/>
        </div>
    )
})
