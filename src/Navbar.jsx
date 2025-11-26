import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Weathering</div>

        {/* Hamburger Icon */}
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
          <span className={open ? "bar open" : "bar"}></span>
        </div>

        {/* Menu Items */}
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li><a href="/">Home</a></li>
          <li><a href="/forecast">Forecast</a></li>
          <li><a href="/diary">Weather Diary</a></li>
          <li><a href="/clothing">Clothing AI</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/assistant">AI Assistant</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
