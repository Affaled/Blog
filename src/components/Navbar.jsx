import React from "react";
import "../assets/styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar_container">
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">JOURNAL</a>
        </li>
        <li>
          <a href="#">CATEGORY</a>
        </li>
        <li>
          <a href="#">GALERY</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
