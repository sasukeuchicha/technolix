import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap';
//import '../node_modules/bootstrap/dist/js/bootstrap.js';


import tower from "./Images/Tower.jpg"
ReactDOM.render(
    <>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </>
,document.getElementById("root")
);