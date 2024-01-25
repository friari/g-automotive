import '../styles/Button.scss';

interface ButtonProps {
  additionalClassNames: string;
  text: string;
  hrefUrl?: string;
}

function Button({ additionalClassNames, text, hrefUrl }: ButtonProps) {
  const mergedClassNames = 'button ' + additionalClassNames;

  if (hrefUrl)
    return (
      <a href={hrefUrl} className={mergedClassNames}>
        {text}
      </a>
    );

  return <button className={mergedClassNames}>{text}</button>;
}

export default Button;
