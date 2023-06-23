import React from "react";
import "../assets/styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar_container">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Journal</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Galery</a>
        </li>
      </ul>
    </nav>
  );
}
