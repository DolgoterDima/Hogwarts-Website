import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/scss/index.scss";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Parse from "parse/dist/parse.min";

Parse.initialize(
  "eMnZdawNWytwhfx2YnqsW34SFOwaEyb1auGmjTij",
  "6JuYXAvQ54W58euzw55ySwx99y8pntwKQadcTtwo"
);
Parse.serverURL = "https://parseapi.back4app.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
