import React from 'react';
import './CardElement.css';

export function CardElement({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" alt="card front" src={card.src} />
        <img className="back" alt="card back" src="/img/svg/favorite.svg" />
      </div>
    </div>
  );
}
