import React from 'react'
import style from './Preloader.module.css'
export const Preloader = () => {
    return (
        <div className={style.load}>
            <div className={style.loading}>Loading</div>
        </div>
    )
}
