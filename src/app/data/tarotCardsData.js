
"use client";
import React, { useState, useEffect } from 'react';

const TarotApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      console.log(Response)
    };

    fetchData();
  }, []);

  return <>{children(apiData)}</>;
};

export default TarotApiProvider;
 