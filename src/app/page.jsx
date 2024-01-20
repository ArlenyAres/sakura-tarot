"use client";

import React, { useState, useEffect } from "react";
import TarotCard from "./components/Cards/TarotCard/TarotCard";
import { getCards } from "./lib/data";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards();
        setCards(data);

        // Shuffle the cards
        const shuffledCards = [...data].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  const handleCardSelect = (card, isSelected) => {
    // Check if the user is trying to select more than three cards
    if (isSelected && selectedCards.length >= 3) {
      alert("Solo puedes elegir tres cartas cada lectura");
      return;
    }

    if (isSelected) {
      setSelectedCards([...selectedCards, card]);
    } else {
      setSelectedCards(selectedCards.filter((selectedCard) => selectedCard.id !== card.id));
    }
    console.log("Selected Cards:", selectedCards); 
  };

  const handleRevelarClick = () => {
    selectedCards.forEach((selectedCard) => {
      console.log(`ID: ${selectedCard.id}, Sakura Card: ${selectedCard.sakuraCard}, Spanish Name: ${selectedCard.spanishName}, Meaning: ${selectedCard.meaning}`);
    });
  };

  return (
    <main>
      <section className="w-5/6 h-64 flex pl-36 items-center">
        <ul className="flex flex-row gap-0.5">
          {cards.map((card) => (
            <TarotCard key={card.id} card={card} onSelect={handleCardSelect} />
          ))}
        </ul>
      </section>
      <button
        onClick={handleRevelarClick}
        className="w-40 h-14 px-12 py-2.5 bg-purple-dark rounded-3xl flex justify-center items-center text-beige mb-6"
      >
        Revelar
      </button>
      
  <section className="flex flex-row gap-20">
        <card className="flex flex-col">
      <div class="w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark"></div> 
      <p>`${selectedCard.spanishName}`:`${selectedCard.meaning}`</p>
      </card>
      <card className="flex flex-col">
      <div class="w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark"></div> 
      <p>`${selectedCard.spanishName}`:`${selectedCard.meaning}`</p>
      </card>
      <card className="flex flex-col">
      <div class="w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark"></div> 
      <p>`${selectedCard.spanishName}`:`${selectedCard.meaning}`</p>
      </card>
      </section>
    </main>
  );
};

export default Home;



