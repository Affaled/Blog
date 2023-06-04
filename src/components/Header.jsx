import React from "react";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import portfolio from "../assets/icons/portfolio.svg";
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
          <img src={github} alt="Github link icon" className="social-icon" />
        </a>
        <a href="#">
          <img
            src={portfolio}
            alt="Portfolio link icon"
            className="social-icon"
          />
        </a>
      </div>
    </header>
  );
}
