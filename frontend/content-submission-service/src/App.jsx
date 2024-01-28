import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import CSS from "./css";

const App = () => (
  <div className="container">
    <CSS/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
