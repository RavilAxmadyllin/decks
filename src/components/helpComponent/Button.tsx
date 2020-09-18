import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './Button.module.scss'

type PropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement >

export const Button = (props: PropsType) => {
    const {name, disabled} = props;
    return <button {...props}
                   className={props.disabled ? `${style.btnDisabled} ${style.simpleButton}`: style.simpleButton}
                   disabled={disabled}>{name}</button>
}
