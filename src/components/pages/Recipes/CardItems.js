import React from 'react';
import '../../../App.css';
import './Cards.css';
import Cards from './Cards.js'
import SearchBar from './SearchBar';

export default function CardItems() {
  return (
    <div id='cards-body'>
    <div className='cards' id="recipe-cards">
      <h1 className="cards-title">What would you like to make today?</h1>
      <SearchBar />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Cards
              src='images/avocado.jpg'
              text='Open Faced Avocado Toast Sandwich'
              path='/avocado-toast'
              alt='Avocado Toast with Cheese'
            />
            <Cards
              src='images/cookies.jpg'
              text='Peanut Butter Cookies'
              path='/recipes'
              alt='Two Peanut Butter Cookies'
            />
          </ul>
          <ul className='cards__items'>
            <Cards
              src='images/omelette.jpg'
              text='Cheese and Veggie Omelette'
              path='/recipes'
              alt='Omelette with Salad'
            />
            <Cards
              src='images/matcha.jpg'
              text='Iced Matcha Latte'
              path='/recipes'
              alt='Matcha Latte with Ice Cream Scoop'
            />
            <Cards
              src='images/couscous.jpg'
              text='Couscous Health Bowl'
              path='/recipes'
              alt='Bowl with Vegetables and Couscous'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}