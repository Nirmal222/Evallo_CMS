import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import { GlobalProvider } from "store/store";
const App = () => (
  <div>
    <MainRoutes/>
  </div>
);

ReactDOM.render(
  <BrowserRouter >
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>
  , document.getElementById("app"));
