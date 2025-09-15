import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">GigaLabs</div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#resume-builder">Resume Builder</a></li>
        <li><a href="#jobportal">Job Portal</a></li>
        <li><a href="#lms">LMS</a></li>
        <li><a href="#gigaspace">Giga Space</a></li>
        <li><a href="#prescreen">Prescreen Tool</a></li>
      </ul>
      <button className="apply-btn">Apply</button>
    </nav>
  );
}

export default Navbar;

