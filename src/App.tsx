import React, {ChangeEvent} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PostsType, RootStateType, store, StoreType} from './redux/store';
import {ActionTypes, addPostAC} from './redux/profile-reducer';
import {Store} from 'redux';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';


type MessageType = {
    // id: number
    posts: Array<PostsType>
    message: string
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    dispatch?: (action: ActionTypes) => void
}

type appProps = {
    state: RootStateType
    posts: Array<PostsType>
    addPost: () => void
}

export type AppPropsType = {
    store: Store
}

export const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes> <Route path="/dialogs" element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/profile"
                               element={<Profile store={props.store}/>}/>
                    </Routes>

                </div>


            </div>
        </BrowserRouter>

    )
        ;
}

// className =
{
    // navData => navData.isActive ? s.active : s.item
}
