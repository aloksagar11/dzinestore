import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { ContextData } from "./ContextAPI/ContextData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextData>
      <App />
    </ContextData>
  </React.StrictMode>
);
