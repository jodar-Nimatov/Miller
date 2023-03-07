import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./pages/Cart/Context";
import App from "./App";
import "./scss/style.scss";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Context>
        <App/>
      </Context>
    </Provider>
  </BrowserRouter>
);
