"use cliente"
import React from 'react';
import './TarotMeaningStyles.css'


const TarotMeaning = ({ meaning }) => {
  return (
    <div className="meaning">
      <p>{meaning}</p>
    </div>
  );
};

export default TarotMeaning; 