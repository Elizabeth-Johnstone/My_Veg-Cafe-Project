import React from "react";
import '../../../App.css';
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <li className="cards__item" id="recipes">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic">
            <img className="cards__item__img" alt={props.alt} src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Cards;
