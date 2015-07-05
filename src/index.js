import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import App from './containers/app-container';
import * as reducers from './reducers';

const redux = createRedux(reducers);

React.render(
    <App />,
    document.getElementById('root')
);