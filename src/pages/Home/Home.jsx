import "./Home.css";
import Header from "../../Layout/Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Footer from "../../Layout/Footer/Footer";
import {useState} from "react";

const Home = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <div className="home-container">
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
