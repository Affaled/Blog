import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header_container">
      <div>
        <h1 className="header_title">Lucar Affaled</h1>
        <Navbar />
      </div>
    </header>
  );
}
