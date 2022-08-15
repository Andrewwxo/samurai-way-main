import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Store} from 'redux';
import {AppStateType} from '../../redux/redax-store';
import {Dialogs} from './Dialogs';

type DialogsContainerPropsType = {
    store: Store<AppStateType>
}

export const DialogsContainer=(props:DialogsContainerPropsType) => {
    const dialogsPageState = props.store.getState().dialogsPage

     let onNewMassageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyAC(body));
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC(dialogsPageState.newMessageBody))
    }

    return <Dialogs updateNewMessageBody={onNewMassageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={dialogsPageState}/>

}