import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './Button.module.scss'

type PropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<PropsType> = (props) => {
    const {name, disabled, children} = props
    return <button {...props}
                   className={props.disabled ? `${style.btnDisabled} ${style.simpleButton}` : style.simpleButton}
                   disabled={disabled}>{name ? name : children}</button>
}

export const ButtonFile:React.FC<PropsType> = (props) => {
    const {children} = props
    return <label className={style.simpleButton}>
        upload file
        {children}
    </label>
}
