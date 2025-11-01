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
            "name": "Услуги психолога Полины Малышевой",
            "itemListElement": servicesList.map(({ header, subtext }) => ({
              "@type": "Service",
              "name": header,
              "description": subtext,
              "provider": {
                "@type": "Person",
                "name": "Полина Малышева"
              }
            }))
          })}
        </script>
      </Helmet>

      <meta itemProp="name" content="Услуги психолога Полины Малышевой" />
      <meta itemProp="url" content="https://psypolinam.ru#services" />

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
