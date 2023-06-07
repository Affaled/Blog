import React from "react";
import image from "../assets/images/image01.jpg";
import "../assets/styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="column">
        <div className="notice">
          <p className="category">Drawing</p>
          <p className="title">Lybrary</p>
          <p className="date">Tuesday, June 7, 2023</p>
          <img src={image} alt="Image" />
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quo ut tempore, dolorum deleniti veniam itaque esse dignissimos ipsa
            quibusdam deserunt animi expedita doloremque qui labore sit possimus
            repudiandae voluptatum?
          </p>
        </div>
      </div>
      <div className="column">
        <p>Coluna 2</p>
      </div>
    </div>
  );
}
