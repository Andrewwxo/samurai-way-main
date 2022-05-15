import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {message} from 'antd';

type dialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: dialogItemPropsType) => {

    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )

}
type messagePropsType = {
    message: string
}

const Message = (props: messagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Andrew'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How a u?'},
        {id: 3, message: 'Fine'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )

}