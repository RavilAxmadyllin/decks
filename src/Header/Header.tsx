import React from 'react'
import style from './Header.module.css'
import ava from '../assets/avatar.png'
import { NavLink } from 'react-router-dom'
import {Link} from '../components/helpComponent/Link'
import {Preloader} from '../components/helpComponent/Preloader'

type PropsType = {
    isAuth: boolean
    profile: {
        name: string | null
        id: string | null
        avatar: string | null
    }
    isLoading: boolean
}


export const Header = (props: PropsType) => {
    const {name, avatar} = props.profile
    const userPhoto = avatar ? avatar : ava
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div style={{color:'white'}}>LOGO</div>
                <div className={style.navBar}>

                    {/*<NavLink to={'/profile'} className={style.link} activeClassName={style.active}>profile</NavLink>*/}
                    {/*<NavLink to={'/packs'} className={style.link} activeClassName={style.active}>packs</NavLink>*/}
                    {/*<NavLink to={'/cards/5f1f0d43f9db0f235812ec83'} className={style.link} activeClassName={style.active}>cards</NavLink>*/}
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
            {props.isLoading &&  <Preloader/>}
        </div>
    )
}
