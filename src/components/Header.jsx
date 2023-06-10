import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_title">
        <h1>Lucar Affaled</h1>
        <Navbar />
      </div>
    </header>
  );
}
