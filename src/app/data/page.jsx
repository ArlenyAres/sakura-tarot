import { useState, useEffect } from "react";
import CardFan from "../components/CardFan/CardFan.jsx";

function DataPage() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/"
        );
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Sakura Tarot</h1>
      <CardFan cardsData={cardsData} />
    </>
  );
}

export default DataPage;
