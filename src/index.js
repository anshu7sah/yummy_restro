import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { DOMAIN, CLIENT_ID } from "./config/Config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID}>
    <App />
  </Auth0Provider>
);
