import React from "react";
import img1 from "../assets/images/img1.jpg";
import "../assets/styles/StarPosts.css";
import "../assets/styles/StarPost-Info.css";

export default function StarPosts() {
  return (
    <div className="starposts_container">
      <img src={img1} alt="img1" />
      <div className="info_container">
        <a href="">Category</a>
        <a href="">Date</a>
        <a href="">Hour</a>
        <a href="">Read More</a>
      </div>
    </div>
  );
}
