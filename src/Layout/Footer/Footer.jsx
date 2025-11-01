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
      aria-label="Контактная информация и ссылки Полины Малышевой, психолога онлайн"
    >
      <meta itemProp="name" content="Психолог ОНЛАЙН – Полина Малышева, помощь при тревоге и стрессе" />
      <meta itemProp="url" content="https://psypolinam.ru" />
      <meta itemProp="address" content="Россия, Санкт-Петербург" />
      <meta itemProp="founder" content="Полина Малышева" />

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
                aria-label="Написать письмо психологу Полине Малышевой на почту info@psypolinam.ru"
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
                aria-label="Позвонить психологу Полине Малышевой по номеру +7 (911) 037-23-11"
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
                aria-label="Открыть Telegram для связи с психологом Полиной Малышевой"
                title="Связаться в Telegram"
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
                aria-label="Открыть WhatsApp для связи с психологом Полиной Малышевой"
                title="Связаться в WhatsApp"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-menu-block">
          <nav aria-label="Навигация по сайту в подвале">
            <ul className="footer-menu">
              {footerLinksRender()}
            </ul>
          </nav>
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
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Психолог ОНЛАЙН – Полина Малышева",
          url: "https://psypolinam.ru",
          logo: "https://psypolinam.ru/logo.webp",
          email: "info@psypolinam.ru",
          telephone: "+79110372311",
          sameAs: [
            "https://t.me/polinagordi",
            "https://wa.me/79110372311"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+79110372311",
            contactType: "Customer Support",
            areaServed: "RU",
            availableLanguage: ["Russian"]
          }
        })}
      </script>
    </footer>
  )
}

export default Footer;
