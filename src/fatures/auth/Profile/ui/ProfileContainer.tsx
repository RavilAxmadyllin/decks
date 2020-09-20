import React, {useState} from 'react'
import {Profile} from './Profile'
import {CardPacks} from '../../../Packs/ui/Packs'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../../bll/store'
import {Redirect} from 'react-router-dom'
import {logout} from '../../Login/bll/loginReducer'
import {SettingProfile} from './SettingProfile'
import {PATH_LOGIN} from '../../../../Routes/Routes'


export const ProfileContainer: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const {profile, isAuth} = useSelector((state: AppStateType) => state.login)
    const logoutHandler = () => dispatch(logout())
    if(!isAuth){
        return <Redirect to={PATH_LOGIN}/>
    }
    return (
        <div className={'wrapper'}>
            <Profile profile={profile} logout={logoutHandler} showSetting={() => setShowModal(true)}/>
            <CardPacks/>
            <SettingProfile show={showModal} onShow={() => setShowModal(!showModal)}/>
        </div>
    )
}
