import React from "react";
import "./Instructions.css";
import CardSearch from "../Recipes/SearchRecipes";

export default function Couscous() {
    CardSearch()
  return (
    <div id="inst-body">
      <div className="inst-container">
        <h2 className="inst-title">Couscous Health Bowl</h2>
        <div className="inst-img-container">
        <img
          className="inst-img"
          src="images/couscous.jpg"
          alt="Bowl with Vegetables and Couscous"></img>
          </div>
        <div className="inst-ingredients-container">
          <h3 className="inst-subtitle">Ingredients</h3>
          <li className="ingredients">1/2 cup pearl couscous</li>
          <li className="ingredients">Vegetables (corn, red peppers, onion, garlic, cucumbers, olives, etc.)</li>
          <li className="ingredients">Avocado (mashed)</li>
          <li className="ingredients">Lettuce</li>
          <li className="ingredients">Blueberries (or other berries)</li>
          <li className="ingredients">Seitan</li>
          <li className="ingredients">Cheese (any type you want)</li>
          <li className="ingredients">Spices (anything you want)</li>
          <li className="ingredients">Salad dressing (any)</li>
        </div>
        <div className="inst-steps-container">
          <h3 className="inst-subtitle">Steps</h3>
          <ol>
          <li className="steps">Boil ¾ cups of water</li>
          <li className="steps">
          Add couscous and let simmer for 10 minutes while covered
          </li>
          <li className="steps">Cut vegetables into small pieces</li>
          <li className="steps">
          Cook small pieces of seitan and vegetables in a frying pan
          </li>
          <li className="steps">
          Once steps 1-4 are complete, add all ingredients to a big bowl and enjoy!
          </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
