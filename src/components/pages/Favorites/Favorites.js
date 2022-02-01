import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../App.css";
import "../Recipes/Recipes.css";
import FavRecipes from "../Recipes/FavRecipes.js";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

      // Below finds ID of user
      let user_id = localStorage.getItem('ID')
      let bodyObj = {
        user_id: user_id
      }

  useEffect(() => {
    axios
      .post("http://localhost:4000/favorites", bodyObj)
      .then((res) => {
        setFavorites(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="recipes-body">
      <h1 className="recipes-title">My Favorites List</h1>
      <div className="recipes-container">
        {
        favorites.map((recipe) => (
          <div key={recipe.recipe_id} className="recipes__wrapper">
            <FavRecipes
              id={recipe.recipe_id}
              src={recipe.img_src}
              text={recipe.name}
              path={recipe.url_path}
              alt={recipe.img_alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
