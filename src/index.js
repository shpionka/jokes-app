import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import * as serviceWorker from './serviceWorker';
import jokeReducer from './redux/joke-reducer';

const store = createStore(jokeReducer, applyMiddleware(thunk, logger));

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();