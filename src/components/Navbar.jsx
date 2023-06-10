import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar_link_list">
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
  );
}
