import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-logo">Weathering</div>
      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#weather">Weather</a></li>
        <li><a href="#diary">Diary</a></li>
        <li><a href="#ai">AI Assistant</a></li>
        <li><a href="#clothing">Clothing</a></li>
        <li><a href="#reports">Reports</a></li>
      </ul>
    </nav>
  );
}
