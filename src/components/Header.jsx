import React from "react";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_title">
        <h1>Lucar Affaled</h1>
      </div>
      <nav className="header_nav">
        <ul className="header_link_list">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">JOURNAL</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">GALLERY</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
