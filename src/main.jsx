import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import App from "./App.jsx";
import ComplexNavbar from "./ComplexNavbar.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ComplexNavbar /> */}
    <Navbar />
    <App />
  </React.StrictMode>
);
