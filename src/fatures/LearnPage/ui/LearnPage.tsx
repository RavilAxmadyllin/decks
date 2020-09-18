import {CardType} from '../../Cards/api/cardsAPI'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {SingleCard} from '../../Cards/ui/SingleCard'
import {Modal} from '../../Modal/Modal'
import style from './LearnPage.module.scss'
import {Button} from '../../../components/helpComponent/Button'
import {sendGrade} from '../../Cards/bll/cardsReducer'


export const LearnPage: React.FC<PropsType> = ({id, cards, show, onClose}) => {
    const [currentCard, setCurrentCard] = useState<CardType>(cards[0])
    const dispatch = useDispatch()
    useEffect(() => {
        if (cards.length > 0) setCurrentCard(getCard(cards))
    }, [dispatch, id, cards])
    const onNext = () => setCurrentCard(getCard(cards))
    const sentGrade = (grades: number) => dispatch(sendGrade(currentCard._id, grades))

    return (
        <Modal show={show} closeModal={onClose}>
            <p>Learn page : </p>
            <div className={style.page}>
                <Button onClick={onNext} name={'next'}/>
                <SingleCard oneCard={currentCard}/>
            </div>
            {grades.map((g, i) => (
                <button key={'grade-' + i} onClick={() => sentGrade(g)}>{g}</button>))}
        </Modal>
    )
}

const grades = [1, 2, 3, 4, 5]
const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0)
    const rand = Math.random() * sum
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade)
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1})
    return cards[res.id + 1]
}
type PropsType = {
    id: string
    cards: Array<CardType>
    show: boolean
    onClose: () => void
}
