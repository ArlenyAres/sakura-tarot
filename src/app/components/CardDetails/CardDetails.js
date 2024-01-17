// CardDetails.js

"use client";


const CardDetails = ({ cardData }) => {
  if (!cardData) {
    return <div>Loading...</div>;
  }

  const { id, spanishName, sakuraCard, cardsReverse, meaning } = cardData;

  return (
    <div>
      <p>Sakura Reverso: <img src={cardsReverse.sakuraReverse} alt="Sakura Reverse" /></p>
      <p>Carta Número: {id}</p>
      <h1>{spanishName}</h1>
      <img src={sakuraCard} alt="Sakura Card" />
      <p>Significado: {meaning}</p>
    </div>
  );
};

export default CardDetails;
