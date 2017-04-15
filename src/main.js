import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import 'whatwg-fetch';

import './styles/main.scss';
import App from './App.js';

const store = configureStore({});

ReactDOM.render (
    <App store={store} />, document.getElementById('root')
);

if(process.env.NODE_ENV !== "production") {
    window.React = React; // enable debugger
}