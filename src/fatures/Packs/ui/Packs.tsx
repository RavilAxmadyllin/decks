import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPack, getPacks} from '../bll/packsReducer'
import {AppStateType} from '../../../bll/store'
import {Search} from '../../Search/Search'
import {CardPack} from './Pack'
import {setPage, setSearch} from '../../Search/bll/searchReducer'
import {Pagination} from '../../Pagination/Pagination'
import style from './Packs.module.scss'
import {Button} from '../../../components/helpComponent/Button'
import {FormModal} from '../../../components/helpComponent/FormModal'
import { Redirect } from 'react-router-dom'

export const CardPacks = React.memo(() => {
    const {packs} = useSelector((state: AppStateType) => state.packs)
    const {settings} = useSelector((state: AppStateType) => state.search)
    const {isLoading} = useSelector((state: AppStateType) => state.app)
    const {isAuth} = useSelector((state: AppStateType) => state.login)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPacks(settings.search, settings.page))
    }, [dispatch, settings.page, settings.search])
    const openAddDeck = () => setOpenModal(true)
    const addDeck = (value: string) => dispatch(createPack(value))
    const searchInput = useCallback((value: string) => dispatch(setSearch(value)), [dispatch])
    const onChangePage = (num: number) => dispatch(setPage(num))
    if(!isAuth){
        return <Redirect to={'/login'} />
    }
    return (
        <div className={style.page}>
            <h2>PACKS</h2>
            <div>
                <Search search={searchInput}/>
                <Button onClick={openAddDeck} name={'ADD PACK'} disabled={isLoading}/>
            </div>
            <div className={style.overlay}>
                <table>
                    <thead>
                    <tr>
                        <td>name</td>
                        <td>Gade</td>
                        <td>cards total</td>
                        <td>actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    {packs.map(pack => <CardPack
                        key={pack._id + new Date().getTime()} id={pack._id}
                        name={pack.name} grade={pack.grade}
                        cardsCount={pack.cardsCount}
                    />)}
                    </tbody>
                </table>
            </div>
            <Pagination cardPacksTotalCount={settings.total} page={settings.page}
                        onPageChanged={onChangePage} portionSize={20}/>
            <FormModal openModal={openModal} setOpenModal={setOpenModal} add={addDeck} title={'add new decks'}/>
        </div>
    )

})

