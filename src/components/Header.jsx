import React from "react";
import { socialicons } from "../data/data-SocialIcons";
import SocialIcon from "../components/SocialIcon";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header>
      <p id="title">Lucar Affaled</p>
      <div className="social-links">
        {socialicons.map((icon, index) => (
          <SocialIcon key={index} icon={icon.icon} alt={icon.alt} />
        ))}
      </div>
    </header>
  );
}
