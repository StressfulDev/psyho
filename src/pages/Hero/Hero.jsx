import Button from "../../components/Button/Button";
import HeroMobileMenu from "./HeroMobileMenu/HeroMobileMenu";
import {ReactComponent as BackgroundSmallImg} from "../../assets/svg/background_small.svg";
import {ReactComponent as BackgroundLargeImg} from "../../assets/svg/background_large.svg";
import polinaBg from "../../assets/img/hero.webp";
import "./Hero.css";

const Hero = ({isBurgerMenuOpen, setIsBurgerMenuOpen}) => {
  const scrollToReviews = () => {
    const element = document.getElementById("reviews");

    element.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section id="hero" className="hero" itemScope itemType="https://schema.org/Person">
      <HeroMobileMenu isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
      <div className="hero-container">
        <div className="hero-block">
          <h1 className="hero-header" itemProp="name">Полина Малышева</h1>
          <h2 className="hero-subheader" itemProp="jobTitle">Психолог ОНЛАЙН</h2>
          <span className="hero-descr" itemProp="description">Рада приветствовать Вас на моём сайте!</span>
          <Button
            text="Ваше мнение"
            className="hero-btn"
            onClick={scrollToReviews}
            ariaLabel="Посмотреть отзывы клиентов"
            title="Посмотреть отзывы клиентов"
          />
        </div>
        <img src={polinaBg} alt="Психолог Полина Малышева" className="hero-polina-bg" itemProp="image"/>
        <BackgroundLargeImg className="hero-large-bg" aria-hidden="true"/>
      </div>
      <BackgroundSmallImg className="hero-small-bg" aria-hidden="true"/>
    </section>
  )
}

export default Hero;
