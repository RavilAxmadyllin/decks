import React, {useEffect, useRef, useState} from 'react'
import {UserType} from '../dal/userAPI'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../bll/store'
import style from './Users.module.scss'
import {Button} from '../../../components/helpComponent/Button'
import userPng from '../../../assets/avatar.png'
import {getUsers} from '../bll/usersReducer'
import {setPage} from '../../Search/bll/searchReducer'
import {Chat} from './Chat'


export const Users = () => {
    const dispatch = useDispatch()
    const {page, total} = useSelector((state: AppStateType) => state.search.settings)
    const users = useSelector((state: AppStateType) => state.users.users)
    const [showUser, setShowUser] = useState(false)

    useEffect(() => {
        dispatch(getUsers(page))
    }, [page])

    const userBlockRef = useRef(null)
    const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget
        if (scrollHeight - Math.ceil(scrollTop) === clientHeight) dispatch(setPage(page + 1))
    }
    const changeHandler = () => setShowUser(!showUser)

    return (
        <div className={style.wrap}>
            <div className={style.container}>
                <div className={style.btn}>
                    <Button onClick={changeHandler}>show</Button>
                </div>
                {showUser ? <Chat/>
                    : <>
                        <h3>Users</h3> <p>count: {total - users.length}</p>
                        <div className={style.usersBlock} ref={userBlockRef} onScroll={scrollHandler}>
                            {users && users.map((u, i) => {
                                return <User key={u._id + u.created + i} user={u}/>
                            })}
                        </div>
                    </>}
            </div>

        </div>
    )
}

const User: React.FC<{ user: UserType }> = ({user}) => {
    return (
        <label className={style.userItem}>
            <div className={style.avatar}>
                <img src={user.avatar ? user.avatar : userPng} alt="photo"/>
            </div>
            <div className={style.userDesc}>
                <h4><span>name :</span> {user.name}</h4>
                <h4> card packs count : {user.publicCardPacksCount}</h4>
            </div>
        </label>
    )
}
