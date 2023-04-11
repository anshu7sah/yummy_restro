import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { DOMAIN, CLIENT_ID } from "./config/Config";

const providerConfig = {
  domain: DOMAIN,
  clientId: CLIENT_ID,
  authorizationParams: { redirect_uri: window.location.origin },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);
