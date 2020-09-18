import React from 'react'
import style from './Card.module.scss'
import {CardType} from '../api/cardsAPI'

type PropsType = {
    oneCard: CardType
}
export const SingleCard:React.FC<PropsType> = (props) => {
    let {oneCard} = props
    if(!oneCard) {
        return  <div>Wait</div>
    }
    return (
        <div className={style.container}>
            <div className={style.items}>
                <div className={`${style.front}  ${style.side}`}>
                    <div className={style.content}>
                        <h1>question</h1>
                        <p>{oneCard.question}</p>
                    </div>
                </div>
                <div className={`${style.back} ${style.side}`}>
                    <div className={style.content}>
                        <h1>answer</h1>
                        <p>{oneCard.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


