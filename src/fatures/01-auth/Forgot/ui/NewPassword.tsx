import {Input} from '../../../../components/helpComponent/Input'
import {Button} from '../../../../components/helpComponent/Button'
import React, {useCallback, useState} from 'react'
import { useParams, RouteComponentProps, Redirect } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../bll/store';
import { newPassword } from '../bll/recoveryReducer';


export const NewPassword = React.memo( (props: RouteComponentProps) => {
    const {loading, error, success} = useSelector( (state: AppStateType) => state.recovery)
    const [password, setPassword] = useState('')
    const {token} =  useParams()
    const dispatch = useDispatch()

    const setNewPassword = useCallback( (event) => {
        setPassword(event.target.value)
    }, [setPassword])
    const sendHandler = () => {
        dispatch(newPassword(token, password))
    }
    if(success) {
        return <Redirect to={'/login'} />
    }
    return(
        <div className={'page-form'}>
            <h3>new password</h3>
            {loading && <span style={{fontWeight: 'bold'}}>loading</span>}
            {error && <span style={{color: 'red'}}>{error}</span>}
            <Input placeholder={'new password'} type={'password'} value={password} onChange={setNewPassword}/>
            <Button name={'send'} disabled={loading} onClick={sendHandler}/>
        </div>
    )
})
