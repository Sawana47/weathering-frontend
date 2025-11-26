import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">WEATHERING</div>

      <ul className="nav-links">
        <li><a href="#weather">Snapshot</a></li>
        <li><a href="#clothes">Clothing</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#diary">Diary</a></li>
        <li><a href="#ai">AI Assistant</a></li>
      </ul>
    </nav>
  );
}
