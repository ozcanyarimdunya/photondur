import React from "react";
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/reducers";
import App from './src/app';

const store = createStore(rootReducer, applyMiddleware(thunk));

const photondur = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent('sporekrani', () => photondur);
