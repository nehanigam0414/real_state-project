// ✅ Imports (sabse upar hone chahiye)
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ChooseReading from "../components/ChooseReading";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Disclaimer from "../components/Disclaimer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero">
        <div className="glass-card hero-animate">
          <h1>Find Your Dream Home</h1>
          <p>Luxury properties curated for modern living</p>

          <div className="form">
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Budget" />
            <button type="button">Search</button>
          </div>
        </div>
      </div>

      <HeroSection />
      <ChooseReading />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
    </>
  );
};

export default Home;
