import React, {ChangeEvent, useState} from 'react'
import {Input} from '../../../../components/helpComponent/Input'
import {Button} from '../../../../components/helpComponent/Button'
import {useDispatch, useSelector} from 'react-redux'
import {signIn} from '../bll/loginReducer'
import {NavLink, Redirect} from 'react-router-dom'
import {AppStateType} from '../../../../bll/store'

import style from './Login.module.scss'
import {PATH_PROFILE, PATH_REGISTRATION} from '../../../../Routes/Routes'

export const Login = () => {
    const [email, setEmail] = useState<string>('testAcc@mail.ru')
    const [pass, setPass] = useState<string>('testAcc@mail.ru123')
    const [rememberMe, setRememberMe] = useState<boolean>(true)
    const {isAuth} = useSelector((state: AppStateType) => state.login)
    const {isLoading} = useSelector((state: AppStateType) => state.app)
    const dispatch = useDispatch()

    const changeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const changePassHandler = (event: ChangeEvent<HTMLInputElement>) => setPass(event.target.value)
    const changeRememberHandler = (event: ChangeEvent<HTMLInputElement>) => setRememberMe(event.target.checked)
    const onSendHandler = () => dispatch(signIn(email, pass, rememberMe))


    if (isAuth) {
        return <Redirect to={PATH_PROFILE}/>
    }
    const styleLogin = {
        width: '200px',
        marginTop: '10px',
        letterSpacing: '10px'
    }
    return (
        <div className={'page-form'}>
            <h2>Login</h2>
            <Input placeholder={'email'} onChange={changeEmailHandler} value={email}/>
            <Input placeholder={'password'} type={'password'} onChange={changePassHandler} value={pass}/>
            <Input placeholder={'remember me'} type={'checkbox'} onChange={changeRememberHandler} checked={rememberMe}/>
            <p className={style.text}>forgot password or email <NavLink to={'/forgot'}>forgot</NavLink></p>
            <NavLink to={PATH_REGISTRATION}>registration</NavLink>
            <Button name={'send'} onClick={onSendHandler} disabled={isLoading} style={styleLogin}/>
        </div>
    )
}
