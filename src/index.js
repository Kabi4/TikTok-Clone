import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import dataReducer from './Store/Reducers/dataReducer';


const rootReducer = combineReducers({
    data: dataReducer
});

const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,ComposeEnhancer(applyMiddleware(thunk)));

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
