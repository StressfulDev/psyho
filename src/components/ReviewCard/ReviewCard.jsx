import "./ReviewCard.css";

const ReviewCard = ({
  text,
  header,
}) => {
  return (
    <div className="review-card" itemScope itemType="https://schema.org/Review">
      <h2 className="review-card_header" itemProp="author">{header}</h2>
      <p className="review-card_text" itemProp="reviewBody">{text}</p>
    </div>
  );
};

export default ReviewCard;
