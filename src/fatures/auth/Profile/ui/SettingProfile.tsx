import React, {ChangeEvent, useState} from 'react'
import {Input} from '../../../../components/helpComponent/Input'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../../bll/store'
import {Button, ButtonFile} from '../../../../components/helpComponent/Button'
import ava from '../../../../assets/avatar.png'
import style from './SettingProfile.module.scss'
import {Modal} from '../../../Modal/Modal'
import {changeProfile} from '../../Login/bll/loginReducer'

export const SettingProfile: React.FC<PropsType> = ({show, onShow}) => {
    const {profile} = useSelector((state: AppStateType) => state.login)
    const [value, setValue] = useState<string | null>(profile.name)
    const [avatar, setAvatar] = useState<string | null>(profile.avatar)
    const dispatch = useDispatch()
    const submitHandler = () => {
        if (avatar && value) {
            dispatch(changeProfile(value, avatar))
            onShow()
        }
    }
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        const reader = new FileReader()
        file && reader.readAsDataURL(file)
        reader.onload = function () {
            setAvatar(typeof reader.result === 'string' ? reader.result : null)
        }
    }
    return (
        <Modal width={'800px'} show={show} closeModal={onShow}>
            <div className={style.wrapper}>
                <div className={style.image}>
                    <img src={avatar || ava} alt=""/>
                </div>
                <div className={style.form}>
                    <div className={style.input}>
                        <Input placeholder={'name'} value={value ? value : ''}
                               onChange={(e) => setValue(e.currentTarget.value)}/>
                    </div>
                    <ButtonFile>
                        <Input type={'file'} defaultValue={''}
                               onChange={changeHandler} style={{display: 'none'}}/>
                    </ButtonFile>
                    <Button onClick={submitHandler} style={{margin: '0'}}>sumbit</Button>
                </div>
            </div>
        </Modal>
    )
}
type PropsType = {
    show: boolean
    onShow: () => void
}
