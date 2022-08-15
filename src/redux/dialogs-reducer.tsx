import React from 'react';
import {RootActions} from './store';


export type ActionTypesDialogs = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>;

export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', newMessageBody: newMessageBody} as const
}

export const sendMessageAC = (message: string) => {
    return {type: 'SEND-MESSAGE', message: message} as const
}

type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Andrew'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How a u?'},
        {id: 3, message: 'Fine'}
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: DialogPageType = initialState, action: RootActions): DialogPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newMessageBody
            return state;

        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

