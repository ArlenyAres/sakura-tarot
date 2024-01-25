import { useState } from "react";
import Image from "next/image";
import './TarotCardStyles.css'

const TarotCard = ({ card, onSelect, style, disabled }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      onSelect(card, !isSelected);
      setIsSelected((prevIsSelected) => !prevIsSelected);
    }
  };

  return (
    <div
      className={`tarot-card ${isSelected ? "selected" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={handleClick}
      style={style}
    >
      <div className="overflow-hidden">
        <Image
          src={isSelected ? card.cardsReverse.sakuraReverse : card.cardsReverse.sakuraReverse}
          alt={isSelected ? card.spanishName : "Reverso"}
          width={80}
          height={160}
        />
      </div>
    </div>
  );
};

export default TarotCard;



