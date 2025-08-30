import {linksList} from "../../../Layout/Header/utils/headerLinksList";
import {scrollByClick} from "../../../utils/scrollByClick";
import {handleTelegramClick} from "../../../utils/handleTelegramClick";
import Button from "../../../components/Button/Button";
import "./HeroMobileMenu.css";

const HeroMobileMenu = ({ isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
  const headerLinksRender = () => linksList?.map(({ id, value}) => (
    <li key={id}>
      <a href={`#${id}`} onClick={(e) => scrollByClick(id, setIsBurgerMenuOpen, e)} className="hero-mobile__item">
        {value}
      </a>
    </li>
  ));

  return (
    <div className={`hero-mobile ${isBurgerMenuOpen ? "hero-mobile__open" : ""}`}>
      <nav>
        <ul className="hero-mobile__list">
          {headerLinksRender()}
        </ul>
      </nav>
      <Button className="hero-mobile__button" text="Записаться на консультацию" isLinkText onClick={handleTelegramClick} />
    </div>
  )
}

export default HeroMobileMenu;
