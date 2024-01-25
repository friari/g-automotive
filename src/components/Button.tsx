import '../styles/Button.scss';

interface ButtonProps {
  additionalClassNames?: string;
  text: string;
  hrefUrl?: string;
  onButtonClick?: () => void;
}

function Button({
  additionalClassNames,
  text,
  hrefUrl,
  onButtonClick,
}: ButtonProps) {
  const mergedClassNames = 'button ' + additionalClassNames;

  if (hrefUrl)
    return (
      <a href={hrefUrl} className={mergedClassNames} onClick={onButtonClick}>
        {text}
      </a>
    );

  return (
    <button className={mergedClassNames} onClick={onButtonClick}>
      {text}
    </button>
  );
}

export default Button;
