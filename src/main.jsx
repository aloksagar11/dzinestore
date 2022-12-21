import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ContextData } from "./ContextAPI/ContextData";
import { FilterContext } from "./ContextAPI/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextData>
      <FilterContext>
        <App />
      </FilterContext>
    </ContextData>
  </React.StrictMode>
);
