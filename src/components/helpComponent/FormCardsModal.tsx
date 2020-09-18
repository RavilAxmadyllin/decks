import React, {useState} from 'react'
import {Input} from './Input'
import {Button} from './Button'
import {Modal} from '../../fatures/Modal/Modal'


export const FormCardModal: React.FC<PropsType> = (props) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const closeModalHandler = () => {
        props.setOpenModal(!props.openModal)
        setQuestion('')
        setAnswer('')
    }
    const addItemHandler = () => {
        question.trim() && props.addItem(question, answer)
        closeModalHandler()
    }
    return (
        <Modal show={props.openModal} closeModal={closeModalHandler}>
            <div>
                <h2>{props.title} :</h2>
                <Input value={question} onChange={(e) => setQuestion(e.currentTarget.value)}/>
                <Input value={answer} onChange={(e) => setAnswer(e.currentTarget.value)}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Button name={'send'} style={{margin: '5px'}} onClick={addItemHandler}/>
                <Button name={'back'} style={{margin: '5px'}} onClick={closeModalHandler}/>
            </div>
        </Modal>
    )
}
type PropsType = {
    openModal: boolean
    setOpenModal: (open: boolean) => void
    addItem: (question: string, answer: string) => void
    title: string
}
