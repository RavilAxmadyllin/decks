import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import style from './Input.module.css'

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function Input(props: InputPropsType) {
    return (
        <>{props.type === 'checkbox' ?
            <label className={style.checkbox}>
                <input className={props.type === 'checkbox' ? style.checkbox : style.input}{...props}/>
                {props.placeholder}
            </label> :
            <input className={props.type === 'checkbox' ? style.checkbox : style.input}{...props}/>}
        </>
    );
};
