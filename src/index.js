import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./utils/Context";
import App from "./App";
// import Context from "./Context";
import "./scss/style.scss";
import "./firebase";
import {store} from './store';
import { Provider } from "react-redux";

// import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <Context>
      <App />
    </Context>
    {/* </Provider> */}
  </BrowserRouter>
  </Provider>
);
