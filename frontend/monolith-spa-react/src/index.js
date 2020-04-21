import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/popper.min.js';

import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
