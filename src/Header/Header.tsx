import React from 'react'
import style from './Header.module.scss'
import ava from '../assets/avatar.png'
import {Link} from '../components/helpComponent/Link'
import {PATH_LOGIN, PATH_MAP, PATH_PROFILE, PATH_USERS} from '../Routes/Routes'


export const Header = (props: PropsType) => {
    const {name, avatar} = props.profile
    const userPhoto = avatar ? avatar : ava
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div>
                    <Link path={PATH_MAP} title={'map'}/>
                    <Link path={PATH_USERS} title={'users'}/>
                </div>
                <div className={style.rightBlock}>
                    {!props.isAuth ? <Link path={PATH_LOGIN} title={'login'}/>
                        : <div className={style.user}>
                            <img src={userPhoto} alt="avatar"/>
                            <Link path={PATH_PROFILE} title={name}/>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

//type

type PropsType = {
    isAuth: boolean
    profile: {
        name: string | null
        id: string | null
        avatar: string | null
    }
}
