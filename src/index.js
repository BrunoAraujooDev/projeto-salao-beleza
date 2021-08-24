import React from 'react';
import ReactDOM from 'react-dom';
import "./config/starter";
import GlobalStyled from './assets/globalStyled';
import Routers from "./router";
import { Provider } from "react-redux";
import store from './store';




ReactDOM.render(
  <Provider store={ store }>
      <GlobalStyled />
        <Routers />
  </Provider>,
  document.getElementById('root')
);


