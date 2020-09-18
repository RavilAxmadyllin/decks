import React, {ChangeEvent, useState} from 'react'
import {Input} from '../../components/helpComponent/Input'
import {Button} from '../../components/helpComponent/Button'
type PropsType = {
    search: (value: string) => void
}
export const Search = React.memo((props:PropsType) => {
    const [value, setValue] = useState('')
    const changeInput = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    const searchHandler = () => props.search(value)
    const onKeyHandler = (e: React.KeyboardEvent) => {
        if(e.charCode === 13) props.search(value)
    }
    return(
        <>
            <Input placeholder={'search'} value={value} onChange={changeInput} onKeyPress={onKeyHandler}/>
            <Button name={'search'} style={{display: 'inline-block'}} onClick={searchHandler}/>
        </>
    )
})
