import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Context } from "./utils/Context";
// import Context from "./Context";
import "./scss/style.scss";
import { AuthContextProvider } from "./utils/authContext";
// import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <Context>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Context>
  </BrowserRouter>
);
