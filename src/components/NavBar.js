import React from "react";

const navStyle = {
  card: {
    // margin: 15,
    minHeight: 50,
    fontSize: "2rem",
    color: "#414B3B",
    background: "#DFEDD6",
    fontFamily: "ui-monospace",
    alignContent: "center", // why wont this work!!
  },
  links: {
    // margin: 10,
    padding: "10px",
  },
};
const headerStyle = {
  card: {
    // margin: 10,
    fontSize: "2rem",
  },
};

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <header style={headerStyle.card} className="header">
      <div style={navStyle.card}>
        <div className="links">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                style={navStyle.links}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange("Projects")}
                style={navStyle.links}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                style={navStyle.links}
                href="https://www.meetup.com/members/363994489/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lindsay Allen
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#mainpage"
                onClick={() => handlePageChange("MainPage")}
                style={navStyle.links}
              >
                Main
              </a>
            </li>
            <li>
              <a
                href="https://github.com/katsaymeow"
                style={navStyle.links}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
//
