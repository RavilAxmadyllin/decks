import React from 'react'
import {Profile} from './Profile'
import {CardPacks} from '../../../Packs/ui/Packs'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../../bll/store'
import {Redirect} from 'react-router-dom'
import {logout} from '../../Login/bll/loginReducer'


export const ProfileContainer: React.FC = () => {
    const dispatch = useDispatch()
    const {profile, isAuth} = useSelector((state: AppStateType) => state.login)
    const logoutHandler = () => {
        dispatch(logout())
    }
    if(!isAuth){
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={'wrapper'}>
            <Profile profile={profile} logout={logoutHandler}/>
            <CardPacks/>
        </div>
    )
}
