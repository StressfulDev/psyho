import "./Home.css";
import Header from "../../Layout/Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Footer from "../../Layout/Footer/Footer";
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {SEO_DEFAULT, SITE_URL} from "../../config/seo";

const Home = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <div className="home-container">
      <Helmet>
        <title>{SEO_DEFAULT.title}</title>
        <meta name="title" content={SEO_DEFAULT.title} />
        <meta name="description" content={SEO_DEFAULT.description} />
        <meta name="keywords" content={SEO_DEFAULT.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SEO_DEFAULT.title} />
        <meta property="og:description" content={SEO_DEFAULT.description} />
        <meta property="og:image" content={SEO_DEFAULT.ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_DEFAULT.title} />
        <meta name="twitter:description" content={SEO_DEFAULT.description} />
        <meta name="twitter:image" content={SEO_DEFAULT.ogImage} />

        <link rel="canonical" href={SITE_URL} />
      </Helmet>

      <Header isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
      <main id="main-content" aria-label="Основной контент сайта психолога">
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
