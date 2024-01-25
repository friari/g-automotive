import Button from './Button';
import '../styles/Card.scss';
import cardImage from '../assets/brisbane_vgpzva.jpg';

interface CardProps {
  cardHeading: string;
  cardText: string[];
  cardButtonText: string;
  index: number;
  onCardSelect: (index: number) => void;
  active: boolean;
}

function Card({
  cardHeading,
  cardText,
  cardButtonText,
  index,
  onCardSelect,
  active,
}: CardProps) {
  return (
    <div className={`card ${active ? 'active' : ''}`}>
      <div className="card__image-container">
        <img
          src={cardImage}
          alt="A photo of Brisbane's city skyline with a bridge in the foreground"
          className="card__image"
        />
      </div>
      <div className="card__content">
        <div className="card__text">
          <h3 className="card__title">{cardHeading}</h3>
          <div className="card__paragraph-wrapper">
            {cardText.map((paragraph, index) => (
              <p className="card__paragraph" key={`paragraph-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <Button
          text={cardButtonText}
          additionalClassNames="card__button"
          onButtonClick={() => onCardSelect(index)}
        />
      </div>
    </div>
  );
}

export default Card;
