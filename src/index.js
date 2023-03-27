import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import { app } from "./config/firebase";

import { ContextUser } from "./hooks/UserContext";
import { BrowserRouter } from "react-router-dom";

import App from "./pages/App";

import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextUser>
        <App />
      </ContextUser>
    </BrowserRouter>
  </React.StrictMode>
);
