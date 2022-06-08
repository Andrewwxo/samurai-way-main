import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
// import {state} from './redux/state';

// const dialogs = dialogsPage.dialogs
// const messages = state.dialogsPage.messages
// const posts = state.profilePage.posts
//

type PostsType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostsType>
}

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}
type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
type appProps = {
    state: RootStateType
    addPost:()=>void
}

let ComponentDialogs = (props: appProps) => {
    <Dialogs
        dialogs={props.state.dialogsPage.dialogs}
        messages={props.state.dialogsPage.messages}/>
}
let ComponentProfile = (props: appProps) => {
    <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>
}

export const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/> */}

                    <Route path="/dialogs" render={ComponentDialogs}/>
                    <Route path="/profile" render={ComponentProfile}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

// className = { navData => navData.isActive ? s.active : s.item }
