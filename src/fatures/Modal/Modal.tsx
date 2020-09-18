import React from 'react'
import style from './Modal.module.scss'


export const Modal: React.FC<ModalType> = ({children, closeModal, show}) => {
    const closeHandler = (event: React.KeyboardEvent & React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // if (event.target === overlayRef.current) closeModal()
        closeModal()
    }
    if (!show) {
        return null
    }
    return (
        <>
            <div className={style.modalOverlay} onClick={closeHandler} />
            <div className={style.modal}>
                <div className={style.modalClose} onClick={closeHandler}>&times;</div>
                {children}
            </div>
        </>
    )
}
type ModalType = {
    show: boolean
    closeModal: () => void
}
