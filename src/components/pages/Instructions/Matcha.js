import React from "react";
import "./Instructions.css";
import CardSearch from "../Recipes/SearchRecipes";

export default function Matcha() {
  CardSearch();
  return (
    <div id="inst-body">
      <div className="inst-container">
        <h2 className="inst-title">Iced Matcha Latte</h2>
        <div className="inst-img-container">
          <img
            className="inst-img"
            src="images/matcha.jpg"
            alt="Matcha Latte with Ice Cream Scoop"
          ></img>
        </div>

        <div className="inst-ingredients-container">
          <h3 className="inst-subtitle">Ingredients</h3>
          <li className="ingredients">Matcha powder</li>
          <li className="ingredients">Honey</li>
          <li className="ingredients">Milk of your choice</li>
          <li className="ingredients">Ice</li>
          <li className="ingredients">Cinnamon</li>
          <li className="ingredients">Vanilla extract,</li>
          <li className="ingredients">Optional: Vanilla ice cream</li>
        </div>

        <div className="inst-tools-container">
          <h3 className="inst-subtitle">Tools</h3>
          <li className="tools">Bamboo whisk</li>
          <li className="tools">Tea strainer</li>
        </div>

        <div className="inst-steps-container">
          <h3 className="inst-subtitle">Steps</h3>
          <ol>
          <li className="steps">Boil water</li>
          <li className="steps">Fill a glass with ice</li>
          <li className="steps">
            Pour the milk of your choice over the ice until the glass is
            half-full
          </li>
          <li className="steps">
            Using a tea strainer and a small spoon or bamboo scoop, sift a
            couple teaspoons of matcha powder into a small bowl
          </li>
          <li className="steps">
            Add a sprinkle of cinnamon and a drop of vanilla extract to the
            bowl
          </li>
          <li className="steps">
            After the water has boiled, pour enough water into the bowl to
            cover the matcha and other ingredients
          </li>
          <li className="steps">
            Mix the ingredients in the bowl with the whisk
          </li>
          <li className="steps">
            Add a teaspoon of honey to the bowl and stir
          </li>
          <li className="steps">
            After the ingredients in the bowl are mixed, pour the contents of
            the bowl on top of the ice and milk
          </li>
          <li className="steps">Optional: add a scoop of ice cream on top</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
