import React from "react";
import { notices } from "../data/dataNotices";
import ViewNotices from "../components/ViewNotices";
import AboutMe from "../components/AboutMe";
import "../assets/styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="column">
        <div className="noticeGroup">
          {notices.map((notice, index) => (
            <ViewNotices
              key={index}
              category={notice.category}
              title={notice.title}
              date={notice.date}
              image={notice.image}
              description={notice.description}
            />
          ))}
        </div>
      </div>
      <div className="column">
        <AboutMe />
      </div>
    </div>
  );
}
