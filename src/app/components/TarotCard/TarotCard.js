//TarotCard.js
"use Client"
import React, { useState } from 'react';
import './TarotCardStyles.css'


const TarotCard = ({ card, onCardClick }) => {
    const [flipped, setFlipped] = useState(false);
  
    const handleCardClick = () => {
      setFlipped(!flipped);
      onCardClick(card);
    };
  
    return (
      <div
        className={`card ${flipped ? 'flipped' : ''}`}
        onClick={() => handleCardClick()}
      >
        <div className="card-inner">
          <div className="card-front">
            {/* Imagen de la carta adversa */}
            <img src={card.cardsReverse.sakuraReverse} alt="Reverso" />
          </div>
          <div className="card-back">
            {/* Imagen del reverso de la carta */}
            <img src={card.sakuraCard} alt={card.englishName} />
          </div>
        </div>
      </div>
    );
  };
  
  export default TarotCard;