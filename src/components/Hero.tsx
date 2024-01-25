import Button from './Button';
import '../styles/Hero.scss';

interface HeroProps {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  backgroundImgSrc: string;
  backgroundImgAlt: string;
}

function Hero({
  title,
  paragraph,
  buttonText,
  buttonLink,
  backgroundImgSrc,
  backgroundImgAlt,
}: HeroProps) {
  return (
    <div className="hero">
      <div className="hero__image-container">
        <img
          src={backgroundImgSrc}
          alt={backgroundImgAlt}
          className="hero__image"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__paragraph">{paragraph}</p>
        <Button
          additionalClassNames="hero__button"
          text={buttonText}
          hrefUrl={buttonLink}
        />
      </div>
    </div>
  );
}

export default Hero;
