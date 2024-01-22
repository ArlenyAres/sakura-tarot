"use client";

import React, { useState, useEffect } from "react";
import TarotCard from "../app/components/TarotCard/TarotCard";
import { getCards } from "../app/lib/data";

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
      <button
        onClick={handleRevelarClick}
        className="w-40 h-14 px-12 py-2.5 bg-purple-dark rounded-3xl flex justify-center items-center text-beige mb-6"
      >
        Revelar
      </button>
      <section className="flex flex-row gap-10">
        {cardRoles.map((role, index) => (
          <div key={index} className="flex flex-col">
            <p>{role}</p>
            <div className={`w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark ${revealCards ? 'revealed' : ''}`}>
              {revealCards && selectedCards[index] && (
                <img src={selectedCards[index].sakuraCard} alt={selectedCards[index].spanishName} />
              )}
            </div>
            {revealCards && selectedCards[index] && (
              <p>{`${selectedCards[index].spanishName}: ${selectedCards[index].meaning}`}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
