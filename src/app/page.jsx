"use client";

import React, { useState, useEffect } from "react";
import TarotCard from "../app/components/TarotCard/TarotCard";
import { getCards } from "../app/lib/data";
import Button from "./components/button/Button";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [revealCards, setRevealCards] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards();
        setCards(data);


        const shuffledCards = [...data].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, []); 

  const handleCardSelect = (card, isSelected) => {
    if (isSelected && selectedCards.length >= 3) {
      alert("Solo puedes elegir tres cartas cada lectura");
      return;
    }

    setSelectedCards(prevSelectedCards => {
      if (isSelected) {
        if (prevSelectedCards.some(selectedCard => selectedCard.id === card.id)) {
          return prevSelectedCards;
        }
        return [...prevSelectedCards, card];
      } else {
        return prevSelectedCards.filter(selectedCard => selectedCard.id !== card.id);
      }
    });
  };

  const handleRevelarClick = () => {
    setRevealCards(true);
  };

  const cardRoles = ["PASADO", "PRESENTE", "FUTURO"];

  return (
    <main className="bg-purple-medium pt-10 px-10">
      <section className="px-10 py-10 bg-beige flex justify-center rounded-3xl">
        <ul className="flex flex-row gap-1">
          {cards.map((card) => (
            <TarotCard
              key={card.id}
              card={card}
              onSelect={handleCardSelect}
              disabled={revealCards} 
            />
          ))}
        </ul>
      </section>

      <div className="flex justify-center py-5">
        <button
          onClick={handleRevelarClick}
          className="w-30 h-10 px-12 py-2.5 bg-purple-dark rounded-full flex justify-center items-center text-beige mb-6 font-bold"
        >
          Revelar
        </button>
      </div>

      <section className="grid grid-cols-1 gap-10 px-8 pb-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {cardRoles.map((role, index) => (
          <div key={index} className="card card-side bg-beige shadow-xl border-dashed border-4 border-purple-dark flex flex-col justify-center items-center">
            <h3 className="text-purple-text card-title text-3xl justify-center pt-6">{role}</h3>
            <div className={`card-body max-h-100 px-4 ${revealCards ? 'revealed' : ''}`}>
              {revealCards && selectedCards[index] && (
                  <img src={selectedCards[index].sakuraCard} alt={selectedCards[index].spanishName} style={{ maxHeight: '300px' }}/>
              )}
            </div>
            {revealCards && selectedCards[index] && (
              <p className="text-purple-text pb-5 px-5 text-2xl font-medium">{`${selectedCards[index].spanishName}: ${selectedCards[index].meaning}`}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
