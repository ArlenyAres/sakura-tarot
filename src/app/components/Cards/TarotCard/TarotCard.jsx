"use client";
import React, { useState } from "react";

const TarotCard = ({ card, cardReverse }) => {
  return (
    <div>
      <span>{card.id}</span>
      <img src={card.cardsReverse.sakuraReverse} alt="Reverso" className="w-24 h-28"/>
    </div>
  );
};
export default TarotCard;
