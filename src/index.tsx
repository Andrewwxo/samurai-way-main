import React from 'react';
import './index.css';
import {store} from './redux/state';
import ReactDOM from 'react-dom';
import {App} from './App';

export const renderTree=() => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>,
        </React.StrictMode>,  document.getElementById('root')
    );
}
store.subscriber(renderTree)
// renderTree()