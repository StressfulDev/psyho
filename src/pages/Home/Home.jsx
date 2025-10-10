import "./Home.css";
import Header from "../../Layout/Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Footer from "../../Layout/Footer/Footer";
import {useState} from "react";
import {Helmet} from "react-helmet-async";

const Home = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Психолог Онлайн Полина Малышева",
    "jobTitle": "Психолог, консультант",
    "description": "Психолог Онлайн Полина Малышева — помощь при тревоге, стрессах, выгорании. Консультации онлайн.",
    "url": "https://psypolinam.ru",
    "image": "https://psypolinam.ru/apple-touch-icon.png",
    "telephone": "+7 (911) 037-23-11",
    "email": "info@psypolinam.ru",
    "sameAs": [
      "https://t.me/polinagordi",
      "https://wa.me/79110372311"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Санкт-Петербург, Россия"
    }
  };

  return (
    <div className="home-container">
      <Helmet>
        {/* Базовая SEO-информация */}
        <title>Психолог Онлайн Полина Малышева — консультации онлайн.</title>
        <meta
          name="description"
          content="Психолог Онлайн Полина Малышева помогает преодолеть тревогу, стресс, выгорание, кризисы. Консультации онлайн."
        />
        <meta
          name="keywords"
          content="Психолог, Онлайн, Психолог Онлайн, психолог Санкт-Петербург, консультация психолога онлайн, тревога, стресс, выгорание, Полина Малышева"
        />

        {/* Open Graph (для соцсетей) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://psypolinam.ru" />
        <meta property="og:title" content="Психолог Онлайн Полина Малышева" />
        <meta property="og:description" content="Консультации психолога онлайн." />
        <meta property="og:image" content="https://psypolinam.ru/og-preview.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Психолог Онлайн Полина Малышева" />
        <meta name="twitter:description" content="Психологическая помощь онлайн." />
        <meta name="twitter:image" content="https://psypolinam.ru/og-preview.jpg" />

        {/* Canonical (предотвращает дублирование страниц) */}
        <link rel="canonical" href="https://psypolinam.ru" />

        {/* JSON-LD разметка (Structured Data) */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
