import {NavLink} from 'react-router-dom'
import React from 'react'
import style from './Link.module.scss'

export const Link: React.FC<PropsType> = (props) => {
    const {path, title} = props
    return (
        <NavLink to={path} className={style.link}>{title}</NavLink>
    )
}
type PropsType = {
    path: string
    title?: string | null
}
