import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./input.css";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import "./Components/i18n";
import Test from "./Components/Test";
import LanguagesSelector from "./Components/Head/navComponents/LanguagesSelector";
import Testing from "./Components/Testing";

ReactGA.initialize("G-L75GY5HCBQ");
//ReactGA.send({ hitType: "pageview", page: "/my-path"});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
