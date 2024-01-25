"use client";
import React, { useState, useEffect } from "react";
import TarotCard from "../TarotCard/TarotCard";
import { getCards } from "../../lib/data";

const TarotDesk = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [revealCards, setRevealCards] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getCards();
            setCards(data);

            const shuffledCards = [...data].sort(() => Math.random() - 0.5);
            setCards(shuffledCards);
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
        };

        fetchData();
    }, []);

    const handleCardSelect = (card, isSelected) => {
        if (isSelected && selectedCards.length >= 3) {
        alert("Solo puedes elegir tres cartas cada lectura");
        return;
        }

        setSelectedCards((prevSelectedCards) => {
        if (isSelected) {
            if (
            prevSelectedCards.some((selectedCard) => selectedCard.id === card.id)
            ) {
            return prevSelectedCards;
            }
            return [...prevSelectedCards, card];
        } else {
            return prevSelectedCards.filter(
            (selectedCard) => selectedCard.id !== card.id
            );
        }
        });
    };

    const handleRevelarClick = () => {
        setRevealCards(true);
    };

    const cardRoles = ["PASADO", "PRESENTE", "FUTURO"];

  

        return (
        <div className="bg-purple-medium pt-10 min-h-full">
        <section className=" bg-beige flex justify-center rounded-3xl relative">
            {/* MODALIDAD DESKTOP*/}
        <ul className="md:flex flex-row gap-1 hidden "> 
            {cards.map((card, index) => (
                <li key={card.id}> 
                <TarotCard
                key={card.id}
                card={card}
                onSelect={handleCardSelect}
                disabled={revealCards}
                style={{}}
            /></li>
            ))}
        </ul>
            {/* MODALIDAD MOBILE*/}
        <ul className="flex flex-wrap gap-1 md:hidden">
            {cards.map((card, index) => (
                <li key={card.id}> 
                <TarotCard
                key={card.id}
                card={card}
                onSelect={handleCardSelect}
                disabled={revealCards}
                style={{
                    width: "50%", 
                    margin: "0.2rem", //margen entre las cartas
                }}
            /></li>
            ))}
        </ul>
        </section>

        <div className="flex justify-center py-5">
        <button
            onClick={handleRevelarClick}
            className="w-30 h-10 px-12 py-2.5 bg-purple-dark rounded-full flex justify-center items-center text-beige mb-6 font-bold"
        >
            Revelar
        </button>
        </div>

        <section className="flex flex-row gap-10 justify-center pb-10">
        {cardRoles.map((role, index) => (
            <div key={index} className="flex flex-col items-center">
            <h3 className="text-white">{role}</h3>
            <div className={`w-20 h-40 bg-beige rounded-3xl border-dashed border-4 border-purple-dark ${revealCards ? 'revealed' : ''}`}>
                {revealCards && selectedCards[index] && (
                <img src={selectedCards[index].sakuraCard} alt={selectedCards[index].spanishName} />
                )}
            </div>
            {revealCards && selectedCards[index] && (
                <p className="text-white pt-5">{`${selectedCards[index].spanishName}: ${selectedCards[index].meaning}`}</p>
            )}
            </div>
        ))}
        </section>
    </div>);
};

export default TarotDesk;
