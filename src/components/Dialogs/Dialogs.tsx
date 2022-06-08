import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';

type DialogPageType ={
    dialogs:Array<DialogsType>
    messages:Array<MessageType>
}

type DialogsType ={
    id:number
    name:string
}

type MessageType ={
    id:number
    message:string
}


export const Dialogs:React.FC<DialogPageType> = ({dialogs, messages, ...props}) => {
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