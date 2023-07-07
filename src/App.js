
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Resume from './Component/Resume/Resume';
import Portfolio from './Component/Portfolio/Portfolio';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [showIcon, setShowIcon] = useState(true);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 100) {
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Layout />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      {showIcon && (<a href="#" class="back-to-top d-flex align-items-center justify-content-center" ><i onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="bi bi-arrow-up-short"></i></a>)}

    </div>
  );
}

export default App;
