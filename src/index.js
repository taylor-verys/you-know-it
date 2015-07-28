import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/app-container';
import * as reducers from './reducers';

import './assets/style.scss';

function loggerMiddleware(next) {
    return next => action => {
        console.log(action);
        next(action);
    }
}

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
const store = finalCreateStore(reducer, {});

React.render(
    <Provider store={store}>
        {() => <App />}
    </Provider>,
    document.getElementById('root')
);
