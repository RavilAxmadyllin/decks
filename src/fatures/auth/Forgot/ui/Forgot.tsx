import {Input} from '../../../../components/helpComponent/Input'
import {Button} from '../../../../components/helpComponent/Button'
import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../../bll/store'
import {recoveryThunk} from '../bll/recoveryReducer';


export const Forgot = React.memo( () => {
    const {loading, success, error} =  useSelector((state: AppStateType) => state.recovery )
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const changeEmailHandler = useCallback( (event) => {
        setEmail(event.target.value)
    },[setEmail])

    const onSendHandler = useCallback( () => {
        dispatch(recoveryThunk(email))
    }, [dispatch, email])
    return(
        <div className={'page-form'}>
            <h2>forgot password</h2>
            {loading && <span style={{fontWeight: 'bold'}}>loading</span>}
            {error && <span style={{color: 'red'}}>{error}</span>}
            {success && <span style={{fontWeight: 'bold'}}>message send to email</span>}
            <br/>
            <Input placeholder={'email'} onChange={changeEmailHandler} value={email}/>
            <Button name={'send'} onClick={onSendHandler} disabled={loading}/>
        </div>
    )
})
