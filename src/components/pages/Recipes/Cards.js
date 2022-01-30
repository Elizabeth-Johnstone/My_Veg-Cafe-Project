import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const handleClick = () => {
    console.log("hi");
  };

  return (
    <div>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic">
            <img className="cards__item__img" alt={props.alt} src={props.src} />
          </figure>
          <h5 className="cards__item__text">{props.text}</h5>
          <i className="fas fa-heart" id="like-btn" onClick={handleClick}></i>
        </Link>
      </li>
    </div>
  );
}
