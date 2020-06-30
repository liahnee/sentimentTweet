import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
// import "semantic-ui-css/semantic.js";


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import index from './reducers/index';

// const initialState = {};

const celebrityStore = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)(index);


ReactDOM.render(
  <Provider store={celebrityStore}>
      <App />
  </Provider>
,
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
