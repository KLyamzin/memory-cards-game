import React from 'react';
import './CardElement.css';

export default function CardElement({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" alt="card front" src={card.src} />
        <img
          className="back"
          alt="card back"
          src="./img/svg/favorite.svg"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
