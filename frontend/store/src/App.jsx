import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./StoreProvider";

const App = () => {
  return <div>This is Store</div>;
};

export default App;

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById("app")
);
