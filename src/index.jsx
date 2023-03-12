import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/styles/style.scss'
import store from "./redux/store";
import {render} from "react-dom";
import firebase from "./services/firebase";
import {onAuthStateFail, onAuthStateSuccess} from "./redux/actions/authActions";

const root = document.getElementById('app');

firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(onAuthStateSuccess(user))
  } else {
    store.dispatch(onAuthStateFail('Failed to authenticate'));
  }
  render(<App store={store}/>, root);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
