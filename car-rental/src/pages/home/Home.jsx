// src/pages/Home.jsx
import Header from "../../components/header/Header.jsx";
import mainImg from "../../assets/mainImg.png"
import './index.css'
import Logos from "../../components/brand-logos/Logos.jsx"
import MobileApp from "../../components/mobile-app/MobileApp.jsx"
import Cars from "../../components/cars/Cars.jsx"
import Card from "../../components/card/Card.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Home() {
  return (
    <>
      <Header />
      <div className="main-content">
        <div className="main-title">
            <h1>Premium Car Rental in Sydney</h1>
            <p>Don't deny yourself the please of driving the best premium cars from around the world here and now.</p>
        </div>
        <div className="main-img" style={{ backgroundImage: `url(${mainImg})` }}>
        </div>
      </div>
      <Logos />
      <MobileApp />
      <Cars />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
