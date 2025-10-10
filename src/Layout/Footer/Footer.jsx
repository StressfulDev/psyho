import EmailIcon from "./utils/EmailIcon";
import PhoneIcon from "./utils/PhoneIcon";
import TelegramIcon from "./utils/TelegramIcon";
import WhatsAppIcon from "./utils/WhatsAppIcon";
import {linksList} from "../Header/utils/headerLinksList";
import {scrollToTop} from "../../utils/scrollToTop";
import {scrollByClick} from "../../utils/scrollByClick";
import img from "../../assets/img/logo.webp";
import './Footer.css';

const Footer = () => {
  const footerLinksRender = () => linksList
    ?.filter(({id}) => id !== "footer")
    ?.map(({id, value}) => (
      <li key={id}>
        <a href={`#${id}`} onClick={(e) => scrollByClick(id, undefined, e)} className="header-list-item footer-menu__item">
          {value}
        </a>
      </li>
    ));

  return (
    <footer
      id="footer"
      className="footer"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Психолог Онлайн Полина Малышева" />
      <meta itemProp="url" content="https://psypolinam.ru" />
      <div className="footer-header__container">
        <h2 className="footer-header">
          Контакты
        </h2>
      </div>
      <div className="footer-description__container">
        <div className="footer-description__block">
          <h3 className="footer-description__header">Как записаться?</h3>
          <p className="footer-description__text">
            {`Чтобы\u00A0записаться\u00A0ко\u00A0мне на\u00A0консультацию, 
            напишите\u00A0мне в\u00A0любом мессенджере. Я\u00A0обязательно\u00A0отвечу, как только смогу.`}
          </p>
          <ul className="footer-contact__list">
            <li>
              <EmailIcon/>
              <a
                href="mailto:info@psypolinam.ru"
                target="_blank"
                rel="noopener noreferrer"
                itemProp="email"
                title="Написать письмо психологу Полине Малышевой"
              >
                info@psypolinam.ru
              </a>
            </li>
            <li>
              <PhoneIcon/>
              <a
                href="tel:+79110372311"
                itemProp="telephone"
                title="Позвонить психологу Полине Малышевой"
              >
                +7 (911) 037-23-11
              </a>
            </li>
            <li>
              <TelegramIcon/>
              <a
                href="https://t.me/polinagordi"
                target="_blank"
                rel="noopener noreferrer"
                itemProp="sameAs"
              >
                Telegram
              </a>
            </li>
            <li>
              <WhatsAppIcon/>
              <a
                href="https://wa.me/79110372311"
                target="_blank"
                rel="noopener noreferrer"
                itemProp="sameAs"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-menu-block">
          <ul className="footer-menu">
            {footerLinksRender()}
          </ul>
          <a
            href="/"
            onClick={scrollToTop}
            aria-label="Вернуться на главную страницу Полины Малышевой"
          >
            <img
              src={img}
              alt="Логотип Полины Малышевой"
              className="footer-logo"
              itemProp="logo"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
