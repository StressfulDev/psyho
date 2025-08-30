import "./CountMiniCard.css";

const CountMiniCard = ({count, text}) => {
  return (
    <div className="count-card">
      <span className="count-value">
        {count}
      </span>
      <span className="count-text">
        {text}
      </span>
    </div>
  );
};

export default CountMiniCard;
