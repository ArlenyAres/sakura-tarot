// TarotCardCircle.js se encargará de la lógica de calcular las coordenadas y el ángulo.
import React, { useEffect, useState } from 'react';
import TarotCardFan from '../TarotCardFan/TarotCardFan.js';

const TarotCardCircle = ({ numCards, arcRadius, cardSpacing, onCardClick }) => {
  const [cards, setCards] = useState([]);
  const [cardsData, setCardsData] = useState([]);

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

  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"
  //         );
  //         const data = await response.json();
  //         setCardsData(data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };
  
  //     fetchData();


  //   const coords = calculateCoords();

  //   cardsData.map((card, index)=> (
  //     setCards(
  //       coords.map((coord, index) => (
  //         <div>
  //    <section
  //      className={`card absolute  bg-blue-500 rounded-md border border-black `}
  //      style={{
  //        left: `${coord.y}px`,
  //        bottom: `${coord.x}px`,
  //        transform: `rotate(${angle}deg)`,
  //      }}
  //      onClick={() => onCardClick(card)}
  //    >
  //      <section className="card-inner">
  //        <div className="card-front">
  //          <img src={card.cardsReverse.sakuraReverse} alt="Reverso" />
  //        </div>
  //        <div className="card-back">
  //          <img src={card.sakuraCard} alt={card.englishName} />
  //        </div>
  //      </section>
  //    </section>
  //   </div> 
  //       ))
  //   );
  //   ))

   
  // }, [numCards, arcRadius, cardSpacing, cardsData, onCardClick]);
};

export default TarotCardCircle;
