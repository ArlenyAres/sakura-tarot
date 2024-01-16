// TarotCardCircle.js se encargará de la lógica de calcular las coordenadas y el ángulo.
import React, { useEffect, useState } from 'react';
import TarotCardFan from '../TarotCardFan/TarotCardFan.js';

const TarotCardCircle = ({ numCards, arcRadius, cardSpacing, tarotCardsData, onCardClick }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const calculateCoords = () => {
      const coords = [];

      for (let i = 0; i < numCards; i++) {
        const angle = (i / (numCards - 1)) * Math.PI + Math.PI / 2; // Rotated by 90 degrees to the right
        const x = arcRadius * Math.cos(angle);
        const y = arcRadius * Math.sin(angle);
        coords.push({ x, y, angle: (angle * 180) / Math.PI });
      }

      return coords;
    };

    const coords = calculateCoords();

    setCards(
      coords.map((coord, index) => (
        <TarotCardFan
          key={index}
          card={tarotCardsData[index]}
          onCardClick={onCardClick}
          x={coord.x}
          y={coord.y}
          angle={coord.angle}
        />
      ))
    );
  }, [numCards, arcRadius, cardSpacing, tarotCardsData, onCardClick]);

  return <>{cards}</>;
};

export default TarotCardCircle;
