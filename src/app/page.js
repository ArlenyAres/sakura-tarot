"use client"
import React, { useState } from 'react';
import TarotCard from './components/TarotCard/TarotCard';
import TarotMeaning from './components/TarotMeaning/TarotMeaning';
import tarotCardsData from './data/sakuraCards.json';
import styles from '../app/globals.css'


const Page = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [meanings, setMeanings] = useState([]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleCardClick = (card) => {
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      const shuffledMeanings = shuffleArray([...meanings, card.meaning]);
      setSelectedCards([...selectedCards, card]);
      setMeanings(shuffledMeanings);
    }
  };

  return (
    <div className="cards-container">
      <div className={`grid ${styles.grid}`}>
        {tarotCardsData.map((card) => (
          <TarotCard key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
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
