
 // TarotCardFan se encargará de la representación visual de una carta en una posición específica.
 import './TarotCardFanStyles.css'

 import React from 'react';

 const TarotCardFan = ({ x, y, angle, card, onCardClick }) => (
  <div>
   <section
     className={`card absolute  bg-blue-500 rounded-md border border-black `}
     style={{
       left: `${y}px`,
       bottom: `${x}px`,
       transform: `rotate(${angle}deg)`,
     }}
     onClick={() => onCardClick(card)}
   >
     <section className="card-inner">
       <div className="card-front">
         <img src={card.cardsReverse.sakuraReverse} alt="Reverso" />
       </div>
       <div className="card-back">
         <img src={card.sakuraCard} alt={card.englishName} />
       </div>
     </section>
   </section>
  </div> 
 );
 
 export default TarotCardFan;
 