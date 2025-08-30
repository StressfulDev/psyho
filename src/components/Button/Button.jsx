import "./Button.css";
import {useRef} from "react";

const Button = ({
  text,
  onClick,
  className,
  isLinkText,
  ariaLabel,
  title,
}) => {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty('--ripple-x', `${x}px`);
    button.style.setProperty('--ripple-y', `${y}px`);

    button.classList.add('ripple-active');

    setTimeout(() => {
      button.classList.remove('ripple-active');
    }, 500);

    onClick();
  };

  return (
    <button
      ref={buttonRef}
      className={`custom-btn ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      title={title}
    >
      <span className={isLinkText && "btn-text"}>{text}</span>
    </button>
  );
};

export default Button;
