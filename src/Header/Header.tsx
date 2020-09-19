import React from 'react'
import style from './Header.module.scss'
import ava from '../assets/avatar.png'
import {NavLink} from 'react-router-dom'
import {Link} from '../components/helpComponent/Link'
import {Preloader} from '../components/helpComponent/Preloader'


export const Header = (props: PropsType) => {
    const {name, avatar} = props.profile
    const userPhoto = avatar ? avatar : ava
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.secondBlock}>
                    <Link path={'/profile'} title={'LOGO'}/>
                    <div><NavLink to={'/users'} className={style.link} activeClassName={style.active}>users</NavLink>
                    </div>
                </div>
                <div className={style.navBar}>
                    {!props.isAuth && <>
                        <NavLink to={'/forgot'} className={style.link} activeClassName={style.active}>forgot</NavLink>
                        <NavLink to={'/login'} className={style.link} activeClassName={style.active}>login</NavLink>
                    </>}
                </div>
                {props.isAuth && <div className={style.user}>
                    <img src={userPhoto} alt="avatar"/>
                    <Link path={'/profile'} title={name}/>
                </div>}
            </div>
            {props.isLoading && <Preloader/>}
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
    isLoading: boolean
}
