import React from 'react';
import {DialogPageType, DialogsType, RootActions, RootStateType} from './store';
import {message} from 'antd';
// import {message} from 'antd';

export type ActionTypesDialogs = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>;

export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', newMessageBody:newMessageBody} as const
}

export const sendMessageAC = (message: string) => {
    return {type: 'SEND-MESSAGE', message:message} as const
}

export const dialogsReducer = (state: DialogPageType, action: RootActions) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newMessageBody
            return state;

        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id:6, message: body})
            return state
        default:
            return state
    }
}

