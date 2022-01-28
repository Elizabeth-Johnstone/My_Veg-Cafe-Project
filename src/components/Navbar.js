import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const divStyle = {
    color: "#23833a",
  };
  return (
    <>
      <nav className="navbar-container">
        <Link to="/" className="logo" style={divStyle}>
          My Veg Café
          <i className="fas fa-seedling" />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="nav-links">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="nav-links">
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-links">
              Log-in
            </Link>
          </li>
        </ul>
        <Link to="/signup">
          <button className="btn">SIGN UP</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
