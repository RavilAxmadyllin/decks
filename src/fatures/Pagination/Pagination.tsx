import React, {useState} from 'react'
import style from './Pagination.module.scss'
type PaginationType = {
    cardPacksTotalCount: number
    page: number
    onPageChanged: (number: number) => void
    portionSize: number

}
export const Pagination = (props: PaginationType) => {
    let [portionNumber, setPortionNumber] = useState(1)
    // pageCount сколько всего страничек
    let pageCount = Math.ceil(props.cardPacksTotalCount / props.portionSize)
    let sizePage = []
    for (let i = 1; i <= pageCount; i++) {
        sizePage.push(i)
    }

    // portionCount количество порций
    const portionCount = Math.ceil(pageCount / props.portionSize)

    const leftPortion = (portionNumber - 1) * props.portionSize + 1
    const rightPortion = portionNumber * props.portionSize
    const filteredPage = sizePage.filter(p => p >= leftPortion && p <= rightPortion)
    return (
        <div className={style.pagination}>{portionNumber > 1 && <span onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}> <button>{'<'}</button> </span>}
            {filteredPage.map(p => {
                return <span onClick={() => props.onPageChanged(p)} key={p}>{p === props.page ? <b>{p}</b> : p}</span>
            })}
            {portionCount > portionNumber && <span onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> <span>{'>'}</span> </span>}
        </div>

    )
}
