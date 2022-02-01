import React from "react";
import "./Instructions.css";
import CardSearch from "../Recipes/SearchRecipes";

export default function Omelette() {
  CardSearch();
  return (
    <div id="inst-body">
      <div className="inst-container">
        <h2 className="inst-title">Vegetable and Cheese Omelette</h2>
        <div className="inst-img-container">
          <img
            className="inst-img"
            src="images/omelette.jpg"
            alt="Omelette with Salad"
          ></img>
        </div>
        <div className="inst-ingredients-container">
          <h3 className="inst-subtitle">Ingredients</h3>
          <li className="ingredients">One egg</li>
          <li className="ingredients">A splash of milk</li>
          <li className="ingredients">Butter</li>
          <li className="ingredients">Shredded cheese</li>
          <li className="ingredients">1/4 onion (chopped into small pieces)</li>
          <li className="ingredients">
            1/4 red pepper (chopped into small pieces)
          </li>
          <li className="ingredients">Garlic (one clove, minced)</li>
          <li className="ingredients">About a tablespoon of frozen corn</li>
          <li className="ingredients">A few small pieces of tempeh</li>
          <li className="ingredients">
            Salt, pepper, paprika, sesame seeds, other spices/seasoning you want
          </li>
        </div>
        <div className="inst-steps-container">
          <h3 className="inst-subtitle">Steps</h3>
          <ol>
          <li className="steps">
            Add red pepper, onion, garlic, tempeh, and corn to a frying pan
            and cook on low heat for about 5 minutes
          </li>
          <li className="steps">
            Crack the egg into a bowl, add the milk, and whisk with a fork
          </li>
          <li className="steps">
            Mix salt, pepper, paprika, sesame seeds, and any other desired
            spices in the bowl
          </li>
          <li className="steps">
            Lightly butter a pan on medium heat and pour in the contents of
            the bowl
          </li>
          <li className="steps">
            Sprinkle the shredded cheese and cooked vegetables on top
          </li>
          <li className="steps">
            Be sure to cook your omelette on both sides and enjoy!
          </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
