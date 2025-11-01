import {ReactComponent as CircleBg} from "../../assets/svg/circle-bg.svg";
import aboutImg from "../../assets/img/about.webp";
import "./About.css";

const About = () => {
  return (
    <section
      id="about"
      className="about"
      aria-label="Информация о психологе Полине Малышевой"
      itemScope
      itemType="https://schema.org/Person"
    >

      <meta itemProp="name" content="Полина Малышева" />
      <meta itemProp="jobTitle" content="Психолог онлайн" />
      <meta itemProp="url" content="https://psypolinam.ru" />
      <meta itemProp="hasOccupation" content="Психолог-консультант, клинический психолог" />
      <meta itemProp="knowsLanguage" content="Русский" />

      <div className="about-block">
        <CircleBg className="about-bg-img" aria-hidden="true"/>
        <h2 className="about-header">
          Обо мне
        </h2>
        <p className="about-descr" itemProp="description">
          {"Мои основные принципы в работе — это эмпатия, искренность, открытость и творческий подход. Психология с душой — мой путь в профессии. Я тот специалист, который готов помочь не бежать от себя. Готов слушать и слышать, направить и сопроводить в нелёгкой работе над собой, которая ведёт к ощущению безопасности, внутреннему комфорту и гармонии — в\u00A0отношениях с\u00A0собой, с\u00A0близкими и с\u00A0окружающим миром. При этом я ценю ясность: умею находить чёткие, быстрые и грамотные решения, чтобы движение к этим целям было не только глубоким, но и практичным."}
        </p>
        <div className="about-descr">
          Работаю в мультимодальном подходе с опорой на когнитивно - поведенческую терапию с запросами:
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              🧠 Расстройства
            </li>
            <li>
              ⚡️ Эмоциональные трудности
            </li>
            <li>
              💔 Межличностные отношения
            </li>
            <li>
              💪🏻 Работа с целями и мотивацией
            </li>
            <li>
              💫 Самооценка и личностное развитие
            </li>
            <li>
              🫂 Психологическая поддержка в трудных ситуациях
            </li>
          </ul>
        </div>
        <p className="about-descr">
          {"Сессии провожу только в онлайн формате на удобной для вас площадке. Гарантирую конфиденциальность, так как строго следую этическому кодексу."}
        </p>
        <p className="about-descr" itemProp="alumniOf">
          <meta itemProp="name" content="Санкт-Петербургский государственный университет" />
          {"Высшее образование - специалитет СПбГУ. В 2024 Закончила международный институт SMART по направлениям практическая психология (развитие и самоопределение, отношения с другими людьми, принятие сложных решений, управление эмоциями) и клиническая психология (психические расстройства: тревожное, депрессивное расстройство, ОКР, БАР, ПТСР и др.)."}
        </p>
        <p className="about-descr">
          {"С 2025 года прохожу обучение в магистратуре по программе «Психология\u00A0управления»."}
        </p>
      </div>
      <img
        src={aboutImg}
        alt="Психолог Полина Малышева на консультации"
        className="about-img"
        loading="lazy"
        itemProp="image"
      />
    </section>
  )
}

export default About;
