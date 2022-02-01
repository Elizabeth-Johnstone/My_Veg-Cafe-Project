import React from "react";
import "./Instructions.css";
import CardSearch from "../Recipes/SearchRecipes";

export default function Couscous() {
  CardSearch();
  return (
    <div id="inst-body">
      <div className="inst-container">
        <h2 className="inst-title">Peanut Butter Cookies</h2>
        <div className="inst-img-container">
          <img
            className="inst-img"
            src="images/cookies.jpg"
            alt="Two Peanut Butter Cookies"
          ></img>
        </div>
        <div className="inst-ingredients-container">
          <h3 className="inst-subtitle">Ingredients</h3>
          <li className="ingredients">1/2 cup butter</li>
          <li className="ingredients">1/2 cup peanut butter</li>
          <li className="ingredients">1/2 cup sugar</li>
          <li className="ingredients">1/2 cup brown sugar</li>
          <li className="ingredients">1 egg</li>
          <li className="ingredients">1 1/4 cups flour</li>
          <li className="ingredients">1/2 teaspoon baking powder</li>
          <li className="ingredients">1/4 teaspoon salt</li>
          <li className="ingredients">3/4 teaspoons baking soda</li>
        </div>
        <div className="inst-steps-container">
          <h3 className="inst-subtitle">Steps</h3>
          <ol>
            <li className="steps">
              Mix butter, peanut butter, sugar, and brown sugar in a
              medium/large mixing bowl
            </li>
            <li className="steps">Beat in eggs</li>
            <li className="steps">
              In another bowl, mix flour, baking powder, baking soda, and salt
            </li>
            <li className="steps">
              Mix the contents of the second bowl into the first
            </li>
            <li className="steps">Refrigerate dough for an hour</li>
            <li className="steps">
              After an hour has passed, preheat oven to 375 degrees
            </li>
            <li className="steps">
              Roll dough into 12 balls and place 1 inch apart on a baking pan
            </li>
            <li className="steps">
              Use a fork to flatten each ball of dough, creating a crisscross
              pattern{" "}
            </li>
            <li className="steps">Bake cookies for 10 minutes </li>
            <li className="steps">Let cool and enjoy! </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
