import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
//context providers
// import AuthProvider from "./contexts/authContext";
import store from "./components/redux/reducer/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {/* <AuthProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </AuthProvider> */}
  </Router>
);
