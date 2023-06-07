import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./assets/styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Navbar />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
}
