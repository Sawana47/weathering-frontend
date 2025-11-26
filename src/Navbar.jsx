import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Weathering</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/forecast">Forecast</a></li>
        <li><a href="/diary">Weather Diary</a></li>
        <li><a href="/clothing">Clothing AI</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/assistant">AI Assistant</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
