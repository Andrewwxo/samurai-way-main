import React from 'react';
import {renderTree} from '../render';

export type PostsType ={
    id:number
    message:any
}
export type ProfilePageType ={
    messageForNewPost: string
    posts:Array<PostsType>
}

export type DialogPageType ={
    dialogs:Array<DialogsType>
    messages:Array<MessageType>
}

export type DialogsType ={
    id:number
    name:string
}

export type MessageType ={
    id:number
    message:string
}
export type SidebarType = {}

export type RootStateType={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export const state: RootStateType = {
    profilePage:{
        messageForNewPost: "",
        posts : [
            {id: 1, message: 'Hi, how a u?'},
            {id: 2, message: 'It\'s my first post'}
        ]
    },
    dialogsPage:{
        dialogs : [
            {id: 1, name: 'John'},
            {id: 2, name: 'Andrew'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How a u?'},
            {id: 3, message: 'Fine'}
        ]
    },
    sidebar:{},
}

export const addPost=(PostMessage:string)=>{
    const newList: PostsType = {
        id: new Date().getTime(),
        message: postMessage,
    }
    state.profilePage.posts.push(newList)
    // state.profilePage.posts
    renderTree(state)
}

export const changeNewText = (newText:string) => {
    state.profilePage.messageForNewPost = newText
    renderTree(state)

}