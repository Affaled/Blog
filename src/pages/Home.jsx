import React from "react";
import StarPosts from "../components/StarPosts";
import ListPosts from "../components/ListPosts";
import SideBar from "../components/SideBar";
import "../assets/styles/Home.css";

export default function Home() {
  return (
    <div className="home_container">
      <StarPosts />
      <div className="list_container">
        <ListPosts />
        <SideBar />
      </div>
    </div>
  );
}
