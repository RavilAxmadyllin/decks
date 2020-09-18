import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deletePack, updatePack} from '../bll/packsReducer'
import {Link} from '../../../components/helpComponent/Link'
import {FormModal} from '../../../components/helpComponent/FormModal'


export const CardPack = React.memo((props: CardType) => {
    const [changeModal, setChangeModal] = useState(false)
    const dispatch = useDispatch()
    const openModal = () => setChangeModal(!changeModal)
    const updateHandler = (value: string) => dispatch(updatePack(props.id, value))
    const deleteHandler = () => dispatch(deletePack(props.id))
    return (
        <>
            <tr>
                <td><Link path={'/cards/' + props.id} title={props.name}/></td>
                <td>{props.grade}</td>
                <td>{props.cardsCount}</td>
                <td>
                    <div className={'button'} onClick={deleteHandler}>delete</div>
                    <div className={'button'} onClick={openModal}>change</div>
                </td>
            </tr>
            <FormModal openModal={changeModal}
                       setOpenModal={openModal}
                       add={updateHandler} title={'new title pack'}/>
        </>
    )
})
type CardType = {
    id: string
    name: string,
    grade: number
    cardsCount: number
}
