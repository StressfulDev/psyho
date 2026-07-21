import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {servicesList} from "./utils/servicesList";
import {ReactComponent as CircleBg} from "../../assets/svg/circle-bg.svg";
import {Helmet} from "react-helmet-async";
import "./Services.css";
import {Fragment} from "react";

const Services = () => {
  const renderServices = () => servicesList?.map(({img, text, subtext, number, header}) => (
    <Fragment key={number}>
      <meta itemProp="serviceType" content={header} />
      <meta itemProp="provider" content="Полина Малышева" />
      <ServiceCard
        img={img}
        text={text}
        subtext={subtext}
        header={header}
        number={number}
      />
    </Fragment>
  ));

  return (
    <section id="services" className="services" itemScope itemType="https://schema.org/OfferCatalog">

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": "Услуги психолога и семейного психолога Полины Малышевой",
            "description": "Онлайн-консультации психолога и семейная терапия",
            "url": "https://psypolinam.ru/#services",
            "itemListElement": servicesList.map(({ header, text, subtext }, index) => ({
              "@type": "Offer",
              "position": index + 1,
              "itemOffered": {
                "@type": "Service",
                "name": `${header.replace(/\u00A0/g, " ")} онлайн`,
                "description": `${text.replace(/\u00A0/g, " ")} ${subtext.replace(/\u00A0/g, " ")}. Формат: онлайн-встреча с психологом.`,
                "provider": {
                  "@type": "Person",
                  "name": "Полина Малышева",
                  "jobTitle": "Психолог и семейный психолог"
                },
                "serviceType": "Online",
                "areaServed": "RU"
              }
            }))
          })}
        </script>
      </Helmet>

      <meta itemProp="name" content="Услуги психолога и семейного психолога Полины Малышевой" />
      <meta itemProp="url" content="https://psypolinam.ru/#services" />

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
