import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./styles/global.css"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Reducers from './reducers/index'
import ReduxThunk from 'redux-thunk'

const store = createStore(Reducers,applyMiddleware(ReduxThunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
