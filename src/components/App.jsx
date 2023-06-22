import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import "../assets/styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}
