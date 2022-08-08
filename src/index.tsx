import React from 'react';
import './index.css';
import {store} from './redux/store';
import ReactDOM from 'react-dom';
import {App} from './App';

export const renderTree=() => {
    debugger
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>,
        </React.StrictMode>,  document.getElementById('root')
    );
}
store.subscriber(renderTree)
renderTree()