import React from "react";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import github from "../assets/icons/github.svg";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header>
      <p className="title">Lucar Affaled</p>
      <div className="social-links">
        <a href="#">
          <img
            src={instagram}
            alt="instagram link icon"
            className="social-icon"
          />
        </a>
        <a href="#">
          <img
            src={facebook}
            alt="Facebook link icon"
            className="social-icon"
          />
        </a>
        <a href="#">
          <img src={twitter} alt="Twitter link icon" className="social-icon" />
        </a>
        <a href="#">
          <img src={github} alt="Github link icon" className="social-icon" />
        </a>
      </div>
    </header>
  );
}
