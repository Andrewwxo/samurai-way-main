import React, {ChangeEvent} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {PostsType, RootStateType, StoreType} from './redux/state';


type MessageType = {
    // id: number
    posts: Array<PostsType>
    message: string
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
}

type appProps = {
    state: RootStateType
    posts:Array<PostsType>
    addPost: () => void
}

function HelloMessage(props: MessageType) {
    const postMessageRef = React.createRef<HTMLTextAreaElement>();
    const addPost = ()=>{
        if (postMessageRef.current) {
            props.addPostCallback(postMessageRef.current.value)
        }
    }
    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{props.changeNewTextCallback(e.currentTarget.value)}
    return <div>
        {props.message}
        <hr/>
        {props.posts.map(p => <div key={p.id}><b>{props.message}</b></div>)}
        <hr/>
        <textarea value={props.message}
                  onChange={newTextChangeHandler}
        ></textarea>
        <button onClick={addPost}>add post</button>
    </div>
}

let ComponentDialogs = (props: appProps) => {
    <Dialogs
        dialogs={props.state.dialogsPage.dialogs}
        messages={props.state.dialogsPage.messages}
        // posts={state.profilePage.posts}
    />
}
let ComponentProfile = (props: appProps) => {
    <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>
}

type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={ComponentDialogs}/>*/}
                    {/*<Route path='/profile' component={ComponentProfile}/>*/}

                    <Route path="/dialogs" element={ComponentDialogs}/>
                    <Route path="/profile" element={ComponentProfile}/>
                    <Route path={'/hello'} element={()=> <HelloMessage
                        posts={state.profilePage.posts}
                        message={state.profilePage.messageForNewPost}
                        addPostCallback={props.store.addPost.bind(props.store)}
                        changeNewTextCallback={props.store.changeNewText.bind(props.store)}
            />}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

// className =
{
    // navData => navData.isActive ? s.active : s.item
}
