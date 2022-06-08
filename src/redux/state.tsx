import React from 'react';

type PostsType ={
    id:number
    message:string
}
type ProfilePageType ={
    posts:Array<PostsType>
}

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
type SidebarType = {}

type RootStateType={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage:{
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

export const addPost=(PostMessage)=>{
    let newList = {
        id:4,
        message: postMessage,
    }
    state.profilePage.posts.push()
}
