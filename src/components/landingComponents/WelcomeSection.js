import React from 'react';
import '../../App.css';
import './WelcomeSection.css';

function WelcomeSection() {
  return (
    <div className='welcome-container'>
      <h1 className="welcome-message">WELCOME</h1>
      <p className="welcome-text">What would you like to make today?</p>
    </div>
  );
}

export default WelcomeSection;