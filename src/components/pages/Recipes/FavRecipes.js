import React from "react";
import "../../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cards(props) {
  const handleClick = () => {

    // Below finds ID of user
    let user_id = localStorage.getItem('ID')
    let bodyObj = {
      user_id: user_id,
      recipe_id: props.id
    }

    axios
      .post("http://localhost:4000/add-remove-favorite", bodyObj)
      .then((res) => {
        let faveName = res.data[0][0].name
        alert(`${faveName} added to favorites list!`);
      }).catch(() => {
        alert('Removed recipe from favorites list')
      })
  };
  
  return (
    <div>
      <li className="cards__item">
        <div className="cards__item__link" id={props.id}>
        <Link  to={props.path}>
          <div className="cards__item__pic">
            <img className="cards__item__img" alt={props.alt} src={props.src} />
          </div>
          <h5 className="cards__item__text">{props.text}</h5>
          </Link>
          <i className="fas fa-heart" id="like-btn" onClick={handleClick}></i>
          </div>
      </li>
    </div>
  );
}
