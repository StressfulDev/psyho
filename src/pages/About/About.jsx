import {useState} from "react";
import {ReactComponent as CircleBg} from "../../assets/svg/circle-bg.svg";
import aboutImg from "../../assets/img/about.webp";
import "./About.css";
import CollapseSection from "../../components/CollapseSection/CollapseSection";

const About = () => {
  const [openSections, setOpenSections] = useState({
    principles: false,
    education: true,
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
          {"Доброго времени суток! Меня зовут Полина, мне 31 год и я практикующий клинический психолог."}
          <br/>
          {"Помогаю навести порядок в мыслях, прожить сложные чувства и выстроить жизнь, в которой вам по-настоящему хорошо и комфортно."}
          <br/>
          {"Создаю безопасное онлайн-пространство, где можно быть самим собой."}
          <br/>
          {"Работаю глубоко и бережно, но при этом структурно и по делу."}
        </p>
        <div className="about-descr">
          Мои принципы в работе:
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              🫂 Эмпатия (человеку нужен человек)
            </li>
            <li>
              🙏 Искренность и живой контакт
            </li>
            <li>
              💃 Творческий подход к каждому запросу
            </li>
            <li>
              🤝 Ясность, структура и конкретные шаги
            </li>
            <li>
              ♥️ Психология с душой и опорой на науку
            </li>
          </ul>
        </div>
        <p className="about-descr">
          {"Я работаю в полимодальном подходе с опорой на когнитивно-поведенческую терапию."}<br/>{"Это значит: мы не только говорим о чувствах, но и понимаем, как устроены ваши реакции, какие мысли поддерживают состояние — и что с этим можно сделать."}
        </p>
        <p className="about-descr">
          {"⭐️ Предлагаю домашние задания, техники самопомощи и материалы после встреч."}
        </p>
        <p className="about-descr">
          {"🧘‍♀️ Помогаю лучше понять свои эмоции, реакции и внутренние конфликты — и найти работающие стратегии для более устойчивой и спокойной жизни.\n"}
        </p>
        <CollapseSection
          title="Образование:"
          style={{ marginTop: "-20px" }}
          isOpen={openSections.education}
        >
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              🎓 СПбГУ — специалитет
            </li>
            <li>
              🎓 Международный институт SMART (2024):
            </li>
            <li>
              ▪️практическая психология (самоопределение, отношения, принятие решений, управление эмоциями)
            </li>
            <li>
              ▪️ клиническая психология (тревожные и депрессивные расстройства, ОКР, БАР, ПТСР и др.)
            </li>
            <li>
              ▪️системная терапия пар (сексуальная гармония в отношениях)
            </li>
            <li>
              🎓 С 2025 года — магистратура ТГУ «Психология управления»
            </li>
          </ul>
        </CollapseSection>
        <CollapseSection
          title={<h4>С какими запросами работаю:</h4>}
          isOpen={openSections.principles}
          onToggle={() => toggleSection("principles")}
          hasIcon
        >
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              ⚡️ Эмоциональные трудности
            </li>
            <li>
              ▫️ тревога
            </li>
            <li>
              ▫️ депрессивные состояния
            </li>
            <li>
              ▫️ страхи
            </li>
            <li>
              ▫️ стресс
            </li>
            <li>
              ▫️ эмоциональные кризисы
            </li>
          </ul>
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              💔 Отношения
            </li>
            <li>
              ▫️ конфликты в паре
            </li>
            <li>
              ▫️ преодоление семейных кризисов
            </li>
            <li>
              ▫️ выстраивание гармоничных отношений
            </li>
          </ul>
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              💫 Самооценка и личностное развитие
            </li>
            <li>
              ▫️ неуверенность
            </li>
            <li>
              ▫️ низкая самооценка
            </li>
            <li>
              ▫️ личностный рост
            </li>
            <li>
              ▫️ поиск опоры на себя
            </li>
          </ul>
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              🫂 Поддержка в сложных ситуациях
            </li>
            <li>
              ▫️ потеря близкого
            </li>
            <li>
              ▫️ развод
            </li>
            <li>
              ▫️ жизненные кризисы
            </li>
            <li>
              ▫️ резкие изменения в жизни
            </li>
          </ul>
          <ul className="about-descr__list" itemProp="knowsAbout">
            <li>
              💪 Работа с целями и мотивацией
            </li>
            <li>
              ▫️ постановка целей
            </li>
            <li>
              ▫️ прокрастинация
            </li>
            <li>
              ▫️ профессиональные и личные изменения
            </li>
          </ul>
        </CollapseSection>
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
