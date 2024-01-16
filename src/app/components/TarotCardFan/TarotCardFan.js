
 // TarotCardFan se encargará de la representación visual de una carta en una posición específica.

 import React from 'react';

 const TarotCardFan = ({ x, y, angle, card, onCardClick }) => (
   <div
     className={`card absolute z-150 w-100 h-24 bg-blue-500 rounded-md border border-black`}
     style={{
       left: `${y}px`,
       bottom: `${x}px`,
       transform: `rotate(${angle}deg)`,
     }}
     onClick={() => onCardClick(card)}
   >
     <div className="card-inner">
       <div className="card-front">
         <img src={card.cardsReverse.sakuraReverse} alt="Reverso" />
       </div>
       <div className="card-back">
         <img src={card.sakuraCard} alt={card.englishName} />
       </div>
     </div>
   </div>
 );
 
 export default TarotCardFan;
 