import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

// ROOT ELEMENT
const rootElement = document.querySelector("#root");
// ROOT
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);