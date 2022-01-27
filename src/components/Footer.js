import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <Link to="/" className="logo">
          My Veg Café
          <i class="fas fa-seedling" />
        </Link>
      </div>

      <div class="social-icon-container">
        <a
          class="social-icon"
          href="https://facebook.com"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-facebook-f" />
        </a>
        <a
          class="social-icon"
          href="https://instagram.com"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-instagram" />
        </a>
        <a
          class="social-icon"
          href="https://youtube.com"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-youtube" />
        </a>
        <a
          class="social-icon"
          href="https://twitter.com"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-twitter" />
        </a>
        <a
          class="social-icon"
          href="https://linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
