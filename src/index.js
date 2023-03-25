import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";

import { BrowserRouter } from "react-router-dom";
import { ContextUser } from "./hooks/UserContext";

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
