import React from "react";
import image02 from "../assets/images/image02.jpg";
import "../assets/styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <h1>About Me</h1>
      <img src={image02} alt="Affaled photo" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse
        tempora quo ullam ipsa.
      </p>
    </div>
  );
}
