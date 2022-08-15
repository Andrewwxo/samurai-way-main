import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogPageType} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    updateNewMessageBody: (body:string)=>void
    sendMessage: ()=>void
    dialogsPage: DialogPageType
}

export const Dialogs= (props:DialogsPropsType) => {
    const dialogsPageState = props.dialogsPage

    let dialogsElement = dialogsPageState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = dialogsPageState.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = dialogsPageState.newMessageBody

    let onNewMassageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMassageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}