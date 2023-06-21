import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import App from "./App.jsx";
import Header from "./ComplexNavbar.jsx";
import "./index.css";
import "./NavBarStyles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <App />
  </React.StrictMode>
);
