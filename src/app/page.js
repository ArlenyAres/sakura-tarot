"use client"
import React, { useState, useEffect } from 'react';
import TarotCard from './components/TarotCard/TarotCard';
import TarotMeaning from './components/TarotMeaning/TarotMeaning';
import tarotCardsData from '../app/data/sakuraCards.json'
import TarotCardFan from './components/TarotCardFan/TarotCardFan';
import styles from '../app/globals.css';

const Page = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [meanings, setMeanings] = useState([]);
  const [cards, setCards] = useState([]);

  const NUM_CARDS = 55;
  const CARD_SPACING = 0.09;
  const ARC_RADIUS = 50;

  const handleCardClick = (card) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      const shuffledMeanings = shuffleArray([...meanings, card.meaning]);
      setSelectedCards([...selectedCards, card]);
      setMeanings(shuffledMeanings);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const calculateCoords = (numCards, arcRadius, cardSpacing) => {
      const coords = [];

      for (let i = 0; i < numCards; i++) {
        const angle = (i / (numCards - 1)) * Math.PI - Math.PI / 2;
        const x = arcRadius * Math.cos(angle);
        const y = arcRadius * Math.sin(angle);
        coords.push({ x, y, angle: (angle * 180) / Math.PI });
      }

      return coords;
    };

    const coords = calculateCoords(NUM_CARDS, ARC_RADIUS, CARD_SPACING);

    setCards(
      coords.map((coord, index) => (
        <TarotCardFan
          key={index}
          card={tarotCardsData[index]}
          onCardClick={handleCardClick}
          x={coord.x}
          y={coord.y}
          angle={coord.angle}
        />
      ))
    );
  }, [handleCardClick]);

  return (
    <div className="container-cards">
      <div className={`grid ${styles.grid}`}>
        {cards}
      </div>
      <div className={`tirada ${styles.tirada}`}>
        {selectedCards.map((card, index) => (
          <div key={card.id} className="flex justify-center items-center space-x-4">
            <TarotCard card={card} />
            <TarotMeaning meaning={meanings[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;