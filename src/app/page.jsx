"use client";

import React, { useState, useEffect } from "react";
import TarotCard from "./components/Cards/TarotCard/TarotCard";
import { getCards } from "./lib/data";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  //This connects to API data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards();
        setCards(data);

        // This shuffles the cards
        const shuffledCards = [...data].sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchData();
  }, []);

  //This allows the player to select three cards only with a pop-up if they try to select more
  const handleCardSelect = (card, isSelected) => {
    if (isSelected && selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
    } else if (!isSelected) {
      setSelectedCards([...selectedCards, card]);
    } else {
      alert("Solo puedes elegir tres cartas cada lectura");
    }
  };

  //This console logs the info for the three cards when the player presses the Revelar button which has an onClick on it now 

  const handleRevelarClick = () => {
    selectedCards.forEach((selectedCard) => {
      console.log(
        `ID: ${selectedCard.id}, Sakura Card: ${selectedCard.sakuraCard}, Spanish Name: ${selectedCard.spanishName}, Meaning: ${selectedCard.meaning}`
      );
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
      <section className="flex flex-row gap-10">
        <card className="flex flex-col">
      <div class="w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark"></div> 
      <p>meaning goes here</p>
      </card>
      <card className="flex flex-col">
      <div class="w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark"></div> 
      <p>meaning goes here</p>
      </card>
      <card className="flex flex-col">
      <div class="w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark"></div> 
      <p>meaning goes here</p>
      </card>
      </section>
    </main>
  );
};

export default Home;
