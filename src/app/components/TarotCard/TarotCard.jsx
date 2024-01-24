"use client";
import Image from "next/image";

const TarotCard = ({ card, onSelect, style }) => {
  const handleClick = () => {
    onSelect(card, true);
  };

  return (
    <div className="tarot-card" onClick={handleClick} style={style}>
      <div className="min-w-12 min-h-28 overflow-hidden">
        <Image
          src={card.cardsReverse.sakuraReverse}
          alt="Reverso"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default TarotCard;


