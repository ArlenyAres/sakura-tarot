"use client";

import React, { useState } from "react";

const TarotCard = ({ card, onSelect }) => {
  
  //new code
const [rotation, setRotation] = useState(0);

  // old code
  const handleClick = () => {
    onSelect(card, true); 
  };

const rotateCard = () => {
  setRotation(rotation + 10);
}

  return (
    <div className="tarot-card" 
    onClick={() => {
      handleClick();
      rotateCard();
    }}
    style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img src={card.cardsReverse.sakuraReverse} alt="Reverso" className="w-28 h-28" />
    </div>
  );
};

export default TarotCard;


