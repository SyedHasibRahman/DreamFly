import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
