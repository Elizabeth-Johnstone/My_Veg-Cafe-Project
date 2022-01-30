import React from "react";
import "./Instructions.css";

export default function AvocadoToast() {
  return (
    <div id="recipe-body">
      <div className="recipe-container">
        <h2 className="recipe-title">Open-Faced Avocado Melt</h2>
        <img
          className="recipe-img"
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2014%2F03%2F07%2Favocado-melts-arugula-RU223208.jpg&q=85"
          alt="Avocado Melt"></img>
        <div className="ingredients-container">
          <h3>Ingredients</h3>
          <li>2 slices of sourdough bread</li>
          <li>1 avocado</li>
          <li>1 garlic clove (chopped into small pieces)</li>
          <li>1/4 of a small onion (chopped into small pieces)</li>
          <li>Mustard (about a teaspoon)</li>
          <li>Juice from 1 lime</li>

          <li>Cheese (any type you want)</li>
          <li>Spices (anything you want)</li>
          <li>Olive oil</li>
          <li>Cilantro</li>
          <li>Optional: Thinly sliced tomatoes</li>
        </div>
        <div className="recipe-instructions">
          <h3>Steps</h3>
          <p>1. Preheat oven to 350 degrees.</p>
          <p>
            2. Put the sourdough slices in a toaster just long enough so that
            they start to get brown.
          </p>
          <p>
            3. While the bread is in the toaster, cut the avocado in half, and
            mash it in a bowl. I think it’s better if you don’t over-do the
            mashing.
          </p>
          <p>
            4. Now mix in the garlic, onion, mustard, some of the lime juice,
            and the spices in with the avocado. Some good spices/herbs to add
            are pepper, paprika, red pepper flakes, and parsley. You can pretty
            much anything.
          </p>
          <p>
            5. Lay the toasted sourdough on a plate and spread the guacamole you
            have just made on it. If there is guacamole left over, squeeze the
            rest of the lime over it and put it in the fridge. The lime juice
            will stop the guacamole from turning brown. Optional: add on
            tomatoes
          </p>
          <p>
            6. Now lay your cheese (slices or grated) on top of the guacamole on
            both of the sourdough slices, so that it’s completely covering the
            guacamole.
          </p>
          <p>7. Place into the oven until the cheese is melted.</p>
          <p>
            8. When you take it out put some olive oil, salt, and some spices
            and cilantro on top! Now all that’s left is to turn on a lo-fi chill
            beats playlist to really set the hipster tone
          </p>
        </div>
      </div>
    </div>
  );
}
