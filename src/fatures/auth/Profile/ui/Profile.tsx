import React from 'react'
import userPhoto from '../../../../assets/avatar.png'
import style from './Profile.module.scss'
import {Button} from '../../../../components/helpComponent/Button'


export const Profile = React.memo(({profile, logout, showSetting}: ProfilePropsType) => {

    return (
        <div className={style.page}>
            <div className={style.overlayProfile}>
                <div className={style.profile}>
                    <img src={profile.avatar ? profile.avatar : userPhoto} alt="user"/>
                </div>
                <div>{profile.name}</div>
                <Button name={'logout'} style={{marginTop: '30px'}} onClick={logout}/>
                <Button name={'setting'} style={{marginTop: '0'}} onClick={showSetting}/>
            </div>
        </div>
    )
})
type ProfilePropsType = {
    profile: {
        name: string | null,
        id: string | null,
        avatar: string | null
    }
    logout: () => void
    showSetting: () => void
}
