import {useState, useRef} from "react";
import {handleTelegramClick} from "../../utils/handleTelegramClick";
import "./ServiceCard.css";

const ServiceCard = ({ img: ImgComponent, text, subtext, number, header }) => {
  const [gradientPosition, setGradientPosition] = useState({ x: "50%", y: "50%" });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      key={number}
      itemScope
      itemType="https://schema.org/Service"
      className="service-card"
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={{
        "--hover-x": gradientPosition.x,
        "--hover-y": gradientPosition.y,
      }}
    >
      <meta itemProp="serviceType" content={header} />
      <meta itemProp="provider" content="Полина Малышева – психолог" />
      <span className="service-card_number">{number}</span>

      <ImgComponent className="service-card_img" aria-hidden="true"/>

      <h3 className="service-card_header" itemProp="name">{header}</h3>

      <div>
        <span className="service-card_text">
          {text}
        </span>
        <span className="service-card_text">
          {subtext}
        </span>
      </div>
      <span
        className="service-card_subtext"
        onClick={handleTelegramClick}
        itemProp="potentialAction"
        itemScope
        itemType="https://schema.org/ReserveAction"
      >
        <meta itemProp="target" content="https://t.me/polinagordi" />
        Записаться
      </span>
    </div>
  );
};

export default ServiceCard;
