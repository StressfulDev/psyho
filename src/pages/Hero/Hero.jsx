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
    <section
      id="hero"
      className="hero"
      itemScope
      itemType="https://schema.org/Person"
      aria-label="Главный раздел — психолог онлайн Полина Малышева"
    >

      <meta itemProp="name" content="Полина Малышева" />
      <meta itemProp="jobTitle" content="Психолог онлайн" />
      <meta itemProp="url" content="https://psypolinam.ru" />
      <meta itemProp="email" content="info@psypolinam.ru" />
      <meta itemProp="telephone" content="+79110372311" />
      <meta itemProp="address" content="Россия, Санкт-Петербург" />
      <meta itemProp="worksFor" content="Частная практика психолога онлайн" />

      <HeroMobileMenu isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
      <div className="hero-container">
        <div className="hero-block">
          <h1 className="hero-header" itemProp="name">Полина Малышева</h1>
          <p className="hero-subheader" itemProp="jobTitle">Психолог ОНЛАЙН</p>
          <span className="hero-descr" itemProp="description">Рада приветствовать Вас на моём сайте!</span>
          <Button
            text="Ваше мнение"
            className="hero-btn"
            onClick={scrollToReviews}
            ariaLabel="Посмотреть отзывы клиентов"
            title="Посмотреть отзывы клиентов"
          />
        </div>
        <img
          src={polinaBg}
          alt="Психолог Онлайн Полина Малышева"
          className="hero-polina-bg"
          itemProp="image"
          loading="eager"
        />
        <BackgroundLargeImg className="hero-large-bg" aria-hidden="true" loading="lazy"/>
      </div>
      <BackgroundSmallImg className="hero-small-bg" aria-hidden="true" loading="lazy"/>
    </section>
  )
}

export default Hero;
