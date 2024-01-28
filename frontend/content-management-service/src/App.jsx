import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import CMS from "./cms";

const App = () => (
  <div className="container">
    <CMS/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
