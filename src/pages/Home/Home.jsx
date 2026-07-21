import "./Home.css";
import Header from "../../Layout/Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Footer from "../../Layout/Footer/Footer";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {SEO_DEFAULT, SITE_NAME, SITE_URL} from "../../config/seo";

const Home = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <div className="home-container">
      <Helmet>
        <html lang="ru" />
        <title>{SEO_DEFAULT.title}</title>
        <meta name="title" content={SEO_DEFAULT.title} />
        <meta name="description" content={SEO_DEFAULT.description} />
        <meta name="keywords" content={SEO_DEFAULT.keywords} />
        <meta name="author" content={SEO_DEFAULT.author} />
        <meta name="robots" content={SEO_DEFAULT.robots} />
        <meta name="googlebot" content={SEO_DEFAULT.robots} />
        <meta name="theme-color" content={SEO_DEFAULT.themeColor} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content={SEO_DEFAULT.locale} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={SEO_DEFAULT.title} />
        <meta property="og:description" content={SEO_DEFAULT.description} />
        <meta property="og:image" content={SEO_DEFAULT.ogImage} />
        <meta property="og:image:secure_url" content={SEO_DEFAULT.ogImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={String(SEO_DEFAULT.ogImageWidth)} />
        <meta property="og:image:height" content={String(SEO_DEFAULT.ogImageHeight)} />
        <meta property="og:image:alt" content={SEO_DEFAULT.ogImageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_DEFAULT.title} />
        <meta name="twitter:description" content={SEO_DEFAULT.description} />
        <meta name="twitter:image" content={SEO_DEFAULT.ogImage} />
        <meta name="twitter:image:alt" content={SEO_DEFAULT.ogImageAlt} />

        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="ru" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
      </Helmet>

      <Header isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
      <main id="main-content" aria-label="Основной контент сайта психолога и семейного психолога Полины Малышевой">
        <Hero isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
        <About/>
        <Services/>
        <Reviews/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home;
