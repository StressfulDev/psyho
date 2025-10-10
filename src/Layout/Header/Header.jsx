import {useState} from "react";
import {useIsMobile} from "../../hooks/useIsMobile";
import {linksList} from "./utils/headerLinksList";
import {scrollByClick} from "../../utils/scrollByClick";
import {handleTelegramClick} from "../../utils/handleTelegramClick";
import Button from "../../components/Button/Button";
import BurgerIcon from "../../assets/svg/BurgerIcon/BurgerIcon";
import img from "../../assets/img/logo.webp";
import "./Header.css";

const Header = ({isBurgerMenuOpen, setIsBurgerMenuOpen}) => {
  const [isPulsing, setIsPulsing] = useState(false);

  const isMobile = useIsMobile(); // по умолчанию 650px

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 800);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const renderHeaderLinks = () => linksList?.map(({id, value}) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={(e) => scrollByClick(id, undefined, e)}
        className="header-list-item"
        aria-current={window.location.hash === `#${id}` ? "true" : undefined}
      >
        {value}
      </a>
    </li>
  ));

  return (
    <header className="header" role="banner">
      <a href="/" onClick={handleLogoClick}>
        <img
          src={img}
          alt="Логотип психолога Полины Малышевой"
          className={`header-logo ${isPulsing ? 'pulse' : ''}`}
          onClick={handleLogoClick}
        />
      </a>
      {!isMobile && (
        <nav aria-label="Основная навигация по разделам сайта">
          <ul className="header-list">
            {renderHeaderLinks()}
          </ul>
        </nav>
      )}
      {!isMobile
        ? (
          <Button
            text="Записаться на консультацию"
            isLinkText
            onClick={handleTelegramClick}
            ariaLabel="Записаться на консультацию у психолога"
            title="Записаться на консультацию у психолога"
          />
        ) : (
          <BurgerIcon
            isOpen={isBurgerMenuOpen}
            onClick={toggleBurgerMenu}
            aria-label="Меню навигации"
            aria-expanded={isBurgerMenuOpen}
            aria-controls="mobile-menu"
          />
        )
      }
    </header>
  );
}

export default Header;
