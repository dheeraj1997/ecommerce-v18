import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/styles/style.scss'
import {store} from "./redux/store";
import {render} from "react-dom";

const root = document.getElementById('root');
render(<App store={store}/>, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
