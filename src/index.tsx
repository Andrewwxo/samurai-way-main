import React from 'react';
import './index.css';
import {store} from './redux/redax-store';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Provider} from 'react-redux';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>,
        </Provider>

    </React.StrictMode>, document.getElementById('root')
);

