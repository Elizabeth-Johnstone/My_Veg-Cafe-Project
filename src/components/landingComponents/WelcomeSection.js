import React from 'react';
import '../../App.css';
import './WelcomeSection.css';

export default function WelcomeSection() {
  return (
    <div className='welcome-container'>
      <h1 className="welcome-message">WELCOME</h1>
      <p className="welcome-text">What would you like to make today?</p>
    </div>
  );
}