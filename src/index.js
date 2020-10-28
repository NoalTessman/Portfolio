import React from 'react';
import ReactDOM from 'react-dom';
//import Retroprofile from './RetroProfile';
import "./index.css"
// import ReactDom from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '30px',
  transition: transitions.SCALE,
  type: types.SUCCESS
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);