import React from 'react'
import userPhoto from '../../../../assets/avatar.png'
import style from './Profile.module.scss'
import {Button} from '../../../../components/helpComponent/Button'

type ProfilePropsType = {
    profile: {
        name: string | null,
        id: string | null,
        avatar: string | null
    }
    logout: () => void
}

export const Profile =React.memo( ({profile, logout}:ProfilePropsType) => {
    return (
        <div className={'page'}>
            <div className={style.overlayProfile}>
                <div className={style.profile}>
                    <img src={userPhoto} alt="user"/>
                </div>
                <div>{profile.name}</div>
                <Button name={'logout'} style={{marginTop: '30px'}} onClick={logout}/>
            </div>
        </div>
    )
})
