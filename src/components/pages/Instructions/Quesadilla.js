import React from "react";
import "./Instructions.css";
import CardSearch from "../Recipes/SearchRecipes";

export default function Quesadilla() {
    CardSearch()
  return (
    <div id="inst-body">
      <div className="inst-container">
        <h2 className="inst-title">Vegetable Quesadilla</h2>
        <div className="inst-img-container">
        <img
          className="inst-img"
          src="images/quesadilla.jpg"
          alt="Quesadilla and Guacamole"></img>
          </div>
        <div className="inst-ingredients-container">
          <h3 className="inst-subtitle">Ingredients</h3>
          <li className="ingredients">Cheese (any type you want)</li>
          <li className="ingredients">A medium-sized flour tortilla</li>
          <li className="ingredients">Vegetables (onions, red peppers, garlic, zucchini, corn, or green beans all work well!)</li>
          <li className="ingredients">Olive oil</li>
          <li className="ingredients">Spices (suggested: paprika, salt, pepper)</li>
          <li className="ingredients">Hot sauce</li>
          <li className="ingredients">One avocado (mashed)</li>
        </div>
        <div className="inst-steps-container">
          <h3 className="inst-subtitle">Steps</h3>
          <ol>
          <li className="steps">
          Chop and cook vegetables in a pan with olive oil on medium heat
          </li>
          <li className="steps">
          Move vegetables to a small bowl
          </li>
          <li className="steps">
          Place tortilla flat on pan on medium heat
          </li>
          <li className="steps">
          Sprinkle cheese and cooked vegetables on half of the tortilla
          </li>
          <li className="steps">
          Fold the tortilla in half and cook on both sides until cheese is melted
          </li>
          <li className="steps">Use your mashed avocado and hot sauce for dipping!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
