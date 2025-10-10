import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {servicesList} from "./utils/servicesList";
import {ReactComponent as CircleBg} from "../../assets/svg/circle-bg.svg";
import "./Services.css";

const Services = () => {
  const renderServices = () => servicesList?.map(({img, text, subtext, number, header}) => (
    <>
      <ServiceCard
        key={number}
        img={img}
        text={text}
        subtext={subtext}
        header={header}
        number={number}
      />
    </>
  ));

  return (
    <section id="services" className="services" itemScope itemType="https://schema.org/OfferCatalog">

      <meta itemProp="name" content="Полина Малышева" />
      <meta itemProp="jobTitle" content="Психолог онлайн" />
      <meta itemProp="url" content="https://psypolinam.ru" />

      <CircleBg className="services-bg-img" aria-hidden="true"/>
      <h2 className="services-header" itemProp="name">
        Услуги
      </h2>
      <div className="services-block" >
        {renderServices()}
      </div>
    </section>
  )
}

export default Services;
