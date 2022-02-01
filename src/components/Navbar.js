import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const divStyle = {
    color: "#23833a",
  };

  const logOut = () => {
    localStorage.clear()
    props.changeStatus(false)
  }
  
  return (
    <>
      <nav className="nav-container">
        <Link to="/" className="nav-logo" style={divStyle}>
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
            <Link to="/recipes" className="nav-links">Recipes</Link>
          </li>
          <li>
            <Link to="/favorites" className="nav-links">
              Favorites
            </Link>
            </li>
            
{/* Toggles log in/out button and allows users to log out */}
            {props.userStatus
          ? 
          <li>
          <Link to="/login" className="nav-links" onClick={logOut}>
          Log out
        </Link>
        </li>
          :
          <li>
            <Link to="/login" className="nav-links">
              Log-in
            </Link>
          </li>
          }
        </ul>
        <Link to="/signup">
          <button className="nav-btn">SIGN UP</button>
        </Link> 
      </nav>
    </>
  );
}

export default Navbar;
