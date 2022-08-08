import React, {ReactNode} from 'react';
import {ActionTypes, profileReducer} from './profile-reducer';
import {ActionTypesDialogs, dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';


export type PostsType = {
    id: number
    message: any
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (PostMessage: string) => void
    _onChange: () => void
    subscriber: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: RootActions) => void
    _callSubscriber: (state:RootStateType)=>void
}

export type RootActions = ActionTypes | ActionTypesDialogs
export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how a u?'},
                {id: 2, message: 'It\'s my first post'}
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },

    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },

    _callSubscriber(state) {

    },

    addPost(PostMessage: string) {
        const newList: PostsType = {
            id: new Date().getTime(),
            message: postMessage,
        }
        this._state.profilePage.posts.push(newList)
        // state.profilePage.posts
        this._onChange()
    },
    _onChange() {

    },
    subscriber(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}
