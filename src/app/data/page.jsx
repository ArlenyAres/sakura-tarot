"use client";

import { useState, useEffect } from 'react';
import CardDetails from "../components/CardDetails/CardDetails";

function DataPage() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Sakura Tarot</h1>
      <div>
        {cardsData.map((card) => (
          <CardDetails key={card.id} cardData={card} />
        ))}
      </div>
    </>
  );
}

export default DataPage;
