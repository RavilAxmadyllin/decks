import React, {useState} from 'react'
import {Input} from './Input'
import {Button} from './Button'
import {Modal} from '../../fatures/Modal/Modal'


export const FormModal: React.FC<PropsType> = (props) => {
    const [value, setValue] = useState('')
    const closeModalHandler = () => {
        props.setOpenModal(!props.openModal)
        setValue('')
    }
    const addDeckHandler = () => {
        value.trim() && props.add(value)
        closeModalHandler()
    }
    return (
        <Modal show={props.openModal} closeModal={closeModalHandler}>
            <div>
                <h2>{props.title} :</h2>
                <Input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Button name={'send'} style={{margin: '5px'}} onClick={addDeckHandler}/>
                <Button name={'back'} style={{margin: '5px'}} onClick={closeModalHandler}/>
            </div>
        </Modal>
    )
}
type PropsType = {
    openModal: boolean
    setOpenModal: (open: boolean) => void
    add: (value: string) => void
    title: string
}
