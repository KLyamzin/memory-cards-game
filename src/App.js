import React, { useState, useEffect } from 'react';
import './App.css';
import CardElement from './components/CardElement.js';

const wonderImages = [
  { src: '/img/svg/burj-21991.svg', match: false },
  { src: '/img/svg/chichen-21990.svg', match: false },
  { src: '/img/svg/colosseum-21986.svg', match: false },
  { src: '/img/svg/egyptian-21984.svg', match: false },
  { src: '/img/svg/eiffel-21992.svg', match: false },
  { src: '/img/svg/gateway-21987.svg', match: false },
  { src: '/img/svg/hotel-21985.svg', match: false },
  { src: '/img/svg/sydney-21983.svg', match: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // shuffle the cars in random
  const randomizeCards = () => {
    const randomize = [...wonderImages, ...wonderImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(randomize);
    setTurns(0);
  };
  const handleChoice = (card) => {
    !choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log('Match');
        resetTurns();
      } else {
        console.log('No Match');
        resetTurns();
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
  };
  return (
    <div className="App">
      <h1>Wonders Of The World</h1>
      <p>{turns}</p>
      <button onClick={randomizeCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <CardElement key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
