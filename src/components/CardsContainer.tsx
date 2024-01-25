import { useState } from 'react';
import Card from './Card';
import '../styles/CardsContainer.scss';

interface CardData {
  heading: string;
  text: string[];
  buttonText: string;
}

interface CardsContainerProps {
  cardsData: CardData[];
}

function CardsContainer({ cardsData }: CardsContainerProps) {
  let [selectedIndex, setSelectedIndex] = useState(1);

  const handleCardSelect = (index: number) => setSelectedIndex(index);

  return (
    <div className="cards-container">
      {cardsData.map((cardItem, index) => (
        <Card
          key={`card-${index}`}
          cardHeading={cardItem.heading}
          cardText={cardItem.text}
          cardButtonText={cardItem.buttonText}
          index={index}
          onCardSelect={handleCardSelect}
          active={selectedIndex === index}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
