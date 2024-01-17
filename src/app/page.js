//page.js

"use client"
import React, { useState, useEffect } from 'react';
import TarotCard from './components/Cards/TarotCard/TarotCard';
import TarotMeaning from './components/TarotMeaning/TarotMeaning';
import tarotCardsData from '../app/data/sakuraCards.json'
import TarotCardCircle from './components/Cards/TarotCardCircle/TarotCardCircle';


const Page = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [meanings, setMeanings] = useState([]);

  const NUM_CARDS = 55;
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

  return (
    <div className="container-cards ">
      <section className='container-tarot-circle'>
        <TarotCardCircle
          numCards={NUM_CARDS}
          arcRadius={ARC_RADIUS}
          cardSpacing={0.001}
          tarotCardsData={tarotCardsData}
          onCardClick={handleCardClick}
        />
      </section>
      <div className={`tirada absolute`}>
        <section className="tirada-container flex">
          {selectedCards.map((card, index) => (
            <div key={card.id} className='relative'>
              <TarotCard card={card} className='flex '/> {/* Ajusta la clase según tu diseño */}
              <TarotMeaning meaning={meanings[index]} className={`meaning absolute top-`} />
            </div>
          ))}
        </section>
        <section>
          {/* otro contenido  */}
        </section>
      </div>
    </div>
  );
};

export default Page;