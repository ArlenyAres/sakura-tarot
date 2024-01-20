"use client";

import React, { useState } from "react";

const TarotCard = ({ card, onSelect }) => {
  const handleClick = () => {
    onSelect(card, true); 
  };

  return (
    <div className="tarot-card" onClick={handleClick}>
      {/* Your card content goes here */}
      <span>{card.id}</span>
      <img src={card.cardsReverse.sakuraReverse} alt="Reverso" className="w-24 h-28" />
    </div>
  );
};

export default TarotCard;
