import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import createRoot from 'react-dom';
import {App} from './App'
import { Provider } from 'react-redux';
import store from './redux/Store';
createRoot.render(
    <Provider store={store}>
        <App/>
        </Provider>,
        document.getElementById('root')
    );

    
