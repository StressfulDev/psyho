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
    <article
      key={number}
      itemScope
      itemType="https://schema.org/Service"
      className="service-card"
      itemProp="itemListElement"
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={{
        "--hover-x": gradientPosition.x,
        "--hover-y": gradientPosition.y,
      }}
    >
      <meta itemProp="serviceType" content={header} />
      <span className="service-card_number">{number}</span>

      <ImgComponent className="service-card_img" aria-hidden="true" itemProp="image"/>

      <h3 className="service-card_header" itemProp="name">{header}</h3>

      <div>
        <span className="service-card_text" itemProp="description">
          {text}
        </span>
        <span className="service-card_text" itemProp="description">
          {subtext}
        </span>
      </div>

      <div itemProp="provider" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Полина Малышева" />
        <meta itemProp="jobTitle" content="Психолог" />
        <meta itemProp="url" content="https://psypolinam.ru" />
      </div>

      <span
        className="service-card_subtext"
        onClick={handleTelegramClick}
        itemProp="potentialAction"
        itemScope
        itemType="https://schema.org/ReserveAction"
        role="button"
        aria-label="Записаться на консультацию"
      >
        <meta itemProp="name" content="Запись на консультацию психолога онлайн" />
        <meta itemProp="target" content="https://t.me/polinagordi" />
        Записаться
      </span>
    </article>
  );
};

export default ServiceCard;
