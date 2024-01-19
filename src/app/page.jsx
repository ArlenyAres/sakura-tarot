// import React, { useState, useEffect } from "react";
import TarotCard from "./components/Cards/TarotCard/TarotCard";
// import TarotMeaning from "./components/Cards/TarotMeaning/TarotMeaning";
// import tarotCardsData from "../app/data/sakuraCards.json";
// import TarotCardCircle from "./components/Cards/TarotCardCircle/TarotCardCircle";
import { getCards } from "./lib/data";

const Home = async () => {
  const cards = await getCards();

  function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
      console.log(cards);
    }
  }
shuffle()

  return (
    <section className="w-5/6 h-64 flex pl-36 items-center">
      <ul className="flex flex-row gap-0.5">
        {cards.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Home;
