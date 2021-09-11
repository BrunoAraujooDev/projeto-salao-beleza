import React from 'react';
import ReactDOM from 'react-dom';
import "./config/starter";
import GlobalStyled from './assets/globalStyled';
import Routers from "./router";
import { Provider } from "react-redux";
import store from './store';
import { ToastContainer } from 'react-toastify';




ReactDOM.render(
  <Provider store={ store }>
      <GlobalStyled />
        <Routers />
        <ToastContainer theme="colored"/>
  </Provider>,
  document.getElementById('root')
);


