import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../App.css";
import "./Cards.css";
import Cards from "./Cards.js";

export default function CardSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/recipes")
      .then((res) => {
        console.log(res.data[0]);
        setRecipes(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id='cards-body'>
    <h1 className="cards-title">What would you like to make today?</h1>
    <div className="search-container">
      <input
        className="search-recipes"
        type="text"
        placeholder="Search for a recipe..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
      <div className="cards-container">
        {recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((recipe) => (
                <div key={recipe.id} className="cards__wrapper">
                  <Cards
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