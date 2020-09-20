import React from 'react'
import style from './Header.module.scss'
import ava from '../assets/avatar.png'
import {Link} from '../components/helpComponent/Link'


export const Header = (props: PropsType) => {
    const {name, avatar} = props.profile
    const userPhoto = avatar ? avatar : ava
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div>
                    <Link path={'/users'} title={'users'}/>
                    <Link path={'/map'} title={'map'}/>
                </div>
                <div className={style.rightBlock}>
                    {!props.isAuth ?
                        <>
                            <Link path={'/forgot'} title={'forgot'}/>
                            <Link path={'/login'} title={'login'}/>
                        </> :
                        <div className={style.user}>
                            <img src={userPhoto} alt="avatar"/>
                            <Link path={'/profile'} title={name}/>
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
