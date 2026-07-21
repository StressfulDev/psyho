/**
 * Единый конфиг SEO для лендинга психолога (index.html + Helmet).
 */
export const SITE_URL = "https://psypolinam.ru";
export const SITE_NAME = "Полина Малышева — психолог и семейный психолог онлайн";

export const SEO_DEFAULT = {
  title: "Психолог и семейный психолог онлайн — Полина Малышева",
  shortTitle: "Полина Малышева — психолог онлайн",
  description:
    "Онлайн-консультации психолога и семейного психолога Полины Малышевой. Индивидуальные встречи и семейная терапия: тревога, стресс, отношения, самооценка. Запись онлайн из любой точки России.",
  ogImage: `${SITE_URL}/og-image.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    "Полина Малышева — психолог и семейный психолог, онлайн-консультации",
  keywords: [
    "психолог онлайн",
    "семейный психолог онлайн",
    "психолог Санкт-Петербург",
    "семейная терапия онлайн",
    "консультация психолога онлайн",
    "психолог Полина Малышева",
    "онлайн психотерапия",
    "помощь при тревоге",
    "семейный психолог",
    "психолог для пар",
    "клинический психолог онлайн",
  ].join(", "),
  locale: "ru_RU",
  themeColor: "#2c241c",
  author: "Полина Малышева",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

/** JSON-LD разметка для поисковиков (Google, Yandex, Bing). */
export const getStructuredData = () => {
  const personId = `${SITE_URL}/#person`;
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "ru-RU",
      description: SEO_DEFAULT.description,
      publisher: { "@id": orgId },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: "Полина Малышева",
      alternateName: ["Polina Malysheva", "Психолог Полина Малышева"],
      jobTitle: "Клинический психолог, семейный психолог",
      description:
        "Практикующий клинический психолог и семейный психолог. Онлайн-консультации для взрослых и пар: тревога, стресс, отношения, самооценка, семейные кризисы.",
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: SEO_DEFAULT.ogImage,
        width: SEO_DEFAULT.ogImageWidth,
        height: SEO_DEFAULT.ogImageHeight,
      },
      telephone: "+7-911-037-23-11",
      email: "info@psypolinam.ru",
      knowsLanguage: ["ru"],
      knowsAbout: [
        "Онлайн-психология",
        "Семейная терапия",
        "Когнитивно-поведенческая терапия",
        "Тревога и стресс",
        "Отношения в паре",
        "Самооценка",
      ],
      sameAs: ["https://t.me/polinagordi", "https://wa.me/79110372311"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Санкт-Петербург",
        addressCountry: "RU",
      },
      worksFor: { "@id": orgId },
    },
    {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": orgId,
      name: SITE_NAME,
      alternateName: "Психолог онлайн Полина Малышева",
      description: SEO_DEFAULT.description,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.webp`,
      image: SEO_DEFAULT.ogImage,
      telephone: "+7-911-037-23-11",
      email: "info@psypolinam.ru",
      priceRange: "₽₽",
      currenciesAccepted: "RUB",
      paymentAccepted: "Bank Transfer, Online Payment",
      founder: { "@id": personId },
      employee: { "@id": personId },
      sameAs: ["https://t.me/polinagordi", "https://wa.me/79110372311"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Санкт-Петербург",
        addressRegion: "Санкт-Петербург",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 59.9311,
        longitude: 30.3609,
      },
      areaServed: [
        { "@type": "Country", name: "Россия" },
        { "@type": "City", name: "Санкт-Петербург" },
      ],
      availableLanguage: ["Russian"],
      serviceType: [
        "Онлайн-консультация психолога",
        "Семейная терапия онлайн",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Психологические консультации онлайн",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Индивидуальная консультация психолога онлайн",
            url: `${SITE_URL}/#services`,
            price: "2500",
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
            itemOffered: {
              "@type": "Service",
              name: "Консультация психолога онлайн",
              description:
                "Индивидуальная онлайн-встреча с психологом длительностью 60 минут",
              provider: { "@id": personId },
              serviceType: "Online psychological counseling",
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: SITE_URL,
                serviceType: "Online",
              },
            },
          },
          {
            "@type": "Offer",
            name: "Семейная терапия онлайн",
            url: `${SITE_URL}/#services`,
            price: "4000",
            priceCurrency: "RUB",
            availability: "https://schema.org/InStock",
            itemOffered: {
              "@type": "Service",
              name: "Семейная терапия онлайн",
              description:
                "Онлайн-встреча семейного психолога длительностью 90 минут для пар и семей",
              provider: { "@id": personId },
              serviceType: "Online family therapy",
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: SITE_URL,
                serviceType: "Online",
              },
            },
          },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+7-911-037-23-11",
        contactType: "customer service",
        email: "info@psypolinam.ru",
        areaServed: "RU",
        availableLanguage: ["Russian"],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "30",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Обо мне",
          item: `${SITE_URL}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Услуги",
          item: `${SITE_URL}/#services`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Отзывы",
          item: `${SITE_URL}/#reviews`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Контакты",
          item: `${SITE_URL}/#footer`,
        },
      ],
    },
  ];
};
