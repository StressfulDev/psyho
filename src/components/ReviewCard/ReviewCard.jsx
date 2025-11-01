import "./ReviewCard.css";

const ReviewCard = ({
  text,
  header,
}) => {
  return (
    <article
      className="review-card"
      itemScope
      itemType="https://schema.org/Review"
      itemProp="itemListElement"
    >
      <h3 className="review-card_header" itemProp="author">{header}</h3>
      <p className="review-card_text" itemProp="reviewBody">{text}</p>
      <meta itemProp="reviewRating" content="5" />
    </article>
  );
};

export default ReviewCard;
