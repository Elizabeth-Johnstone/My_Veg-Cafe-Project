import React from "react";
import "./Instructions.css";

export default function AvocadoToast() {
  return (
    <div id="inst-body">
      <div className="inst-container">
        <h2 className="inst-title">Open-Faced Avocado Melt</h2>
        <div className="inst-img-container">
        <img
          className="inst-img"
          src="images/avocado.jpg"
          alt="Avocado Toast with Cheese"></img>
          </div>
        <div className="inst-ingredients-container">
          <h3 className="inst-subtitle">Ingredients</h3>
          <li className="ingredients">2 slices of sourdough bread</li>
          <li className="ingredients">1 avocado</li>
          <li className="ingredients">1 garlic clove (chopped into small pieces)</li>
          <li className="ingredients">1/4 onion (chopped into small pieces)</li>
          <li className="ingredients">Mustard (about a teaspoon)</li>
          <li className="ingredients">Juice from 1 lime</li>
          <li className="ingredients">Cheese (any type you want)</li>
          <li className="ingredients">Spices (anything you want)</li>
          <li className="ingredients">Olive oil</li>
          <li className="ingredients">Cilantro</li>
        </div>
        <div className="inst-steps-container">
          <h3 className="inst-subtitle">Steps</h3>
          <ol>
          <li className="steps">Preheat oven to 350 degrees.</li>
          <li className="steps">
            Put the sourdough slices in a toaster just long enough so that
            they start to get brown.
          </li>
          <li className="steps">
            While the bread is in the toaster, cut the avocado in half, and
            mash it in a bowl.
          </li>
          <li className="steps">
            Now mix in the garlic, onion, mustard, some of the lime juice,
            and the spices with the avocado. Some good spices/herbs to add
            are pepper, paprika, red pepper flakes, and parsley. You can add pretty
            much anything.
          </li>
          <li className="steps">
            Lay the toasted sourdough on a plate and spread the guacamole you
            have just made on it. If there is guacamole left over, squeeze the
            rest of the lime over it and put it in the fridge. The lime juice
            will stop the guacamole from turning brown.
          </li>
          <li className="steps">
            Now lay your cheese (slices or grated) on top of the guacamole on
            both of the sourdough slices, so that it’s completely covering the
            guacamole.
          </li>
          <li className="steps">Place into the oven until the cheese is melted.</li>
          <li className="steps">
            When you take it out put some olive oil, salt, and some spices
            and cilantro on top! Now all that’s left is to turn on a lo-fi chill
            beats playlist to really set the hipster tone
          </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
