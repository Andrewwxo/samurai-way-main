import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


export const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() => <UsersContainer />}/>

                    </Switch>
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
