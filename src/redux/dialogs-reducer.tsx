import React from 'react';
import {RootActions} from './store';


export type ActionTypesDialogs = ReturnType<typeof updateNewMessageBody> | ReturnType<typeof sendMessage>;

export const updateNewMessageBody = (newMessageBody: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', newMessageBody: newMessageBody} as const
}

export const sendMessage = (message: string) => {
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

export let initialState = {
    dialogs: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Andrew'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How a u?'},
        {id: 3, message: 'Fine'}
    ] as Array<MessageType>,
    newMessageBody: '',
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state:InitialStateType = initialState, action: ActionTypesDialogs):InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return  {
                ...state, newMessageBody: action.newMessageBody
            }
            ;

        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body} ]
            };
        default:
            return state
    }
}

