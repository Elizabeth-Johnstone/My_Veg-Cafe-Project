import React from "react";
import "../../../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Cards(props) {
  // let navigate = useNavigate();
  const handleClick = () => {
    // e.stopPropagation()
    // Below finds ID of user
    let user_id = localStorage.getItem('ID')
    let bodyObj = {
      user_id: user_id,
      recipe_id: props.id
    }
    axios
      .post("http://localhost:4000/add-favorite", bodyObj)
      .then((res) => {
        let newFave = res.data[0][0].name
        alert(`${newFave} added to favorites list!`);
        // props.logFunction();
        // navigate('/signup')
      }).catch(() => alert("Already added!"));
  };
// add button localStorage.Clear()
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
