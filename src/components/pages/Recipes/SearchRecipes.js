import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../App.css";
import "./Recipes.css";
import FavRecipes from "./FavRecipes.js";

export default function CardSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/recipes")
      .then((res) => {
        setRecipes(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id='recipes-body'>
    <h1 className="recipes-title">What would you like to make today?</h1>
    <div className="recipes-search-container">
      <input
        className="recipes-search"
        type="text"
        placeholder="Search for a recipe..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
      <div className="recipes-container">
        {recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((recipe) => (
                <div key={recipe.recipe_id} 
                className="recipes__wrapper">
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
