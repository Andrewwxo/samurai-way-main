import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type dialogItemPropsType= {
    name:string
    id: number
}

const DialogItem = (props:dialogItemPropsType) => {

    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    )

}
type messagePropsType = {
    message:string
}

const Message = (props:messagePropsType) => {
    return  <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name={'John'} id={1}/>
               <DialogItem name={'Andrew'} id={2}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How a u?'}/>
                <Message message={'Fine'}/>
            </div>
        </div>
    )

}