"use client";
import Image from "next/image";

const TarotCard = ({ card, onSelect, style }) => {
  const handleClick = () => {
    onSelect(card, true);
  };

  return (
    <div className="tarot-card" onClick={handleClick} style={style}>
      <div className=" overflow-hidden">
        <Image
          src={card.cardsReverse.sakuraReverse}
          alt="Reverso"
          width={80}
          height={160}
        />
      </div>
    </div>
  );
};

export default TarotCard;


