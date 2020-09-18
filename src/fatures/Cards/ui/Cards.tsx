import React, {useEffect, useState} from 'react'
import {RouteComponentProps, useParams} from 'react-router-dom'
import {Pagination} from '../../Pagination/Pagination'
import {useDispatch, useSelector} from 'react-redux'
import {addCard, deleteCard, getCardThunk, updateCard} from '../bll/cardsReducer'
import {AppStateType} from '../../../bll/store'
import {Button} from '../../../components/helpComponent/Button'
import {FormCardModal} from '../../../components/helpComponent/FormCardsModal'
import {LearnPage} from '../../LearnPage/ui/LearnPage'
import style from './Card.module.scss'


export const Cards = React.memo((props: RouteComponentProps<any>) => {
    const [modalCreate, setModalCreate] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    const [showLearn, setShowLearn] = useState(false)
    const [currentId, setCurrentId] = useState('')
    const [page, setPage] = useState(1)
    const {cards} = useSelector((state: AppStateType) => state.card)
    const {settings} = useSelector((state: AppStateType) => state.search)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardThunk(id, page))
    }, [dispatch, page, id])

    const createCardHandler = (question: string, answer: string) => dispatch(addCard(id, question, answer))
    const deleteCardHandler = (cardId: string) => dispatch(deleteCard(cardId, id))
    const updateHandler = (question: string, answer: string) => dispatch(updateCard(currentId, id, question, answer))

    const openUpdateModal = (cardId: string) => {
        setCurrentId(cardId)
        setModalUpdate(true)
    }

    return (
        <> <div className={style.page}>
            <div className={style.overlay}>
                <h3> Create card
                    <Button name={'+'} onClick={() => setModalCreate(!modalCreate)}
                            style={{display: 'inline-flex',marginLeft:'10px'}}/>
                </h3>
                <h3> Learn Page
                    <Button name={'Learn Page'} onClick={() => setShowLearn(!showLearn)}
                            style={{display: 'inline-flex',marginLeft:'10px'}}/>
                </h3>
                <FormCardModal openModal={modalCreate} setOpenModal={() => setModalCreate(!modalCreate)}
                               addItem={createCardHandler} title={'Create card'}/>
                <FormCardModal openModal={modalUpdate} setOpenModal={() => setModalUpdate(!modalUpdate)}
                               addItem={updateHandler} title={'update card'}/>
                <table>
                    <thead>
                    <tr>
                        <td>Question</td>
                        <td>Gade</td>
                        <td>delete</td>
                        <td>update</td>
                    </tr>
                    </thead>
                    <tbody>
                    {cards.map(c => {
                        return <tr key={c.more_id + c.created} id={c._id}>
                            <td>{c.question}</td>
                            <td>{c.grade}</td>
                            <td onClick={() => deleteCardHandler(c._id)}><span>delete</span></td>
                            <td onClick={() => openUpdateModal(c._id)}><span>update</span></td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <LearnPage id={id} cards={cards} show={showLearn} onClose={() => setShowLearn(!showLearn)}/>
            </div>
            <Pagination cardPacksTotalCount={settings.total}
                        page={settings.page} onPageChanged={setPage} portionSize={6}/>
        </div>
        </>
    )
})

