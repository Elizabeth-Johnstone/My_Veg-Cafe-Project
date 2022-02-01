import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Footer() {
  return (
    <div className="foot-container">
      <div>
        <Link to="/" className="foot-logo">
          My Veg Café
          <i className="fas fa-seedling" />
        </Link>
      </div>

      <div className="foot-socials">
        <a
          className="foot-icon"
          href="https://facebook.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          className="foot-icon"
          href="https://instagram.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="foot-icon"
          href="https://youtube.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          className="foot-icon"
          href="https://twitter.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          className="foot-icon"
          href="https://linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
