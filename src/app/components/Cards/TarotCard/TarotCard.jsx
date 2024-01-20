"use client";
import React, { useState } from "react";

const TarotCard = ({ card, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    onSelect(card, !isSelected);
  };

  return (
    <div onClick={handleCardClick} className={`tarot-card ${isSelected ? 'selected' : ''}`}>
      <span>{card.id}</span>
      <img src={card.cardsReverse.sakuraReverse} alt="Reverso" className="w-24 h-28"/>
    </div>
  );
};

export default TarotCard;