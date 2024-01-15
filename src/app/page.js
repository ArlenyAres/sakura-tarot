"use client";

import { useEffect, useState } from 'react';

const Card = ({ x, y, angle }) => (
  <div
    className="card absolute z-10 w-16 h-24 bg-lilac-medium rounded-md border border-black"
    style={{
      left: `${y}px`,
      bottom: `${x}px`,
      transform: `rotate(${angle}deg)`,
    }}
  ></div>
);

const Home = () => {
  const [cards, setCards] = useState([]);
  
  const updateCards = () => {
    const NUM_CARDS = window.innerWidth < 640 ? 30 : 55;
    const CARD_SPACING = 0.09;
    const ARC_RADIUS = window.innerWidth < 640 ? 120 : 199;

    const calculateCoords = (numCards, arcRadius, cardSpacing) => {
      const coords = [];

      for (let i = 0; i < numCards; i++) {
        const angle = (i / (numCards - 1)) * Math.PI - Math.PI / 2;
        const x = arcRadius * Math.cos(angle);
        const y = arcRadius * Math.sin(angle);
        coords.push({ x, y, angle: (angle * 150) / Math.PI });
      }

      return coords;
    };

    const coords = calculateCoords(NUM_CARDS, ARC_RADIUS, CARD_SPACING);

    setCards(
      coords.map((coord, index) => (
        <Card key={index} x={coord.x} y={coord.y} angle={coord.angle} />
      ))
    );
  };

  useEffect(() => {
    updateCards();

    window.addEventListener('resize', updateCards);

    return () => {
      window.removeEventListener('resize', updateCards);
    };
  }, []); 

  return (
    <div className="bg-beige min-h-screen flex flex-col items-center justify-center pt-40 pr-20">
      <div className="flex items-center justify-center">
        <div id="cardContainer" className="relative mt-10">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default Home;
