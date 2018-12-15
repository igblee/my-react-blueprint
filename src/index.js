import React from 'react';
import {
  Provider
} from 'react-redux'
import ReactDOM from 'react-dom';
import {
  BrowserRouter
} from "react-router-dom";

import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/index'
import rootSaga from './saga'

const store = configureStore()
console.log(store)
ReactDOM.render((
  <Provider store = { store } >
    <BrowserRouter >
      <App / >
    </BrowserRouter>
  </Provider >
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();