import ReviewCard from "../../components/ReviewCard/ReviewCard";
import {Navigation, Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {reviewsList} from "./utils/reviewsList";
import {useIsMobile} from "../../hooks/useIsMobile";
import {ReactComponent as CircleBg} from "../../assets/svg/circle-bg-white.svg";
import {ReactComponent as BackgroundSmallImg} from "../../assets/svg/background_small.svg";
import "./Reviews.css";
import "swiper/css";
import "swiper/css/navigation";

const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const Reviews = () => {
  const isTablet = useIsMobile(850);
  const isMobile = useIsMobile(650); // по умолчанию 650px

  const chunkSize = () => {
    if (isMobile) {
      return 1;
    } else if (isTablet) {
      return 4;
    }
    return 6;
  };

  const groupedReviews = chunkArray(reviewsList, chunkSize());
  const isAutoplaying = chunkSize() <= 4;

  return (
    <section id="reviews" className="reviews">

      <meta itemProp="name" content="Полина Малышева" />
      <meta itemProp="jobTitle" content="Психолог онлайн" />
      <meta itemProp="url" content="https://psypolinam.ru" />

      <CircleBg className="reviews-bg-img" aria-hidden="true"/>
      <h2 className="reviews-header">Отзывы</h2>
      <div className="reviews-slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={isAutoplaying ? {delay: 3000, disableOnInteraction: false} : false}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          className="reviews-swiper"
          aria-label="Слайдер с отзывами клиентов"
          role="region"
        >
          {groupedReviews.map((group, index) => (
            <SwiperSlide autoplay key={index}>
              <div className="review-slide-group">
                {group.map(({text, header}, i) => (
                  <ReviewCard key={i} text={text} header={header}/>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <BackgroundSmallImg className="reviews-block_bg" aria-hidden="true"/>
    </section>
  );
};

export default Reviews;
