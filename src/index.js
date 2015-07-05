import React from 'react';
import { createDispatcher, createRedux, composeStores } from 'redux';
import thunkMiddleware from 'redux/lib/middleware/thunk';
import { Provider } from 'redux/react';
import App from './containers/app-container';
import * as reducers from './reducers';

function loggerMiddleware(next) {
    return action => {
        console.log(action);
        next(action);
    }
}

const dispatcher = createDispatcher(
    composeStores(reducers),
    getState => [ thunkMiddleware(getState), loggerMiddleware ]
);

const redux = createRedux(dispatcher);

React.render(
    <Provider redux={redux}>
        {() => <App />}
    </Provider>,
    document.getElementById('root')
);