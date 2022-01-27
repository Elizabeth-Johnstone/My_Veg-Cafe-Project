import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <Link to="/" className="logo">
          My Veg Café
          <i className="fas fa-seedling" />
        </Link>
      </div>

      <div className="social-icon-container">
        <a
          className="social-icon"
          href="https://facebook.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          className="social-icon"
          href="https://instagram.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="social-icon"
          href="https://youtube.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-youtube" />
        </a>
        <a
          className="social-icon"
          href="https://twitter.com"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          className="social-icon"
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
