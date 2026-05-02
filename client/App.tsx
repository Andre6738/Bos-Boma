import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Specials from './components/Specials';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import Reviews from './components/Reviews';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-bone-50">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Specials />
        <Gallery />
        <Awards />
        <Reviews />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
