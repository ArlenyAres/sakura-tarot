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

  // Nueva lógica para organizar las cartas en un semicírculo
  const totalCards = cards.length;
  const angleIncrement = Math.PI / (totalCards - 1);
  const radius = 300; // Ajusta el radio según sea necesario
  const center = { x: 400, y: 300 }; // Ajusta el centro según sea necesario


  return (
    <main className="bg-purple-medium pt-10 px-10">
      <section className="px-10 py-10 bg-beige flex justify-center rounded-3xl relative ">
        <ul className="flex flex-row gap-1">
          {cards.map((card, index) => {
            const angle = index * angleIncrement - Math.PI / 1;
            const x = center.x + radius * Math.cos(angle) - 450; // Ajuste para centrar la tarjeta
            const y = center.y + radius * Math.sin(angle);

            const cardStyle = {
              transform: `translate(${x}px, ${y}px)`,
              position: "absolute",
            };

            return (
              <TarotCard
                key={card.id}
                card={card}
                onSelect={handleCardSelect}
                disabled={revealCards}
                style={cardStyle}
              />
            );
          })}
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

      <section className="flex flex-row gap-10 justify-center pb-10">
        {cardRoles.map((role, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-white">{role}</h3>
            <div className={`w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark ${revealCards ? 'revealed' : ''}`}>
              {revealCards && selectedCards[index] && (
                <img src={selectedCards[index].sakuraCard} alt={selectedCards[index].spanishName} />
              )}
            </div>
            {revealCards && selectedCards[index] && (
              <p className="text-white pt-5">{`${selectedCards[index].spanishName}: ${selectedCards[index].meaning}`}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
