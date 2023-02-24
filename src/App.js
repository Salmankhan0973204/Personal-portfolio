
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

function App() {
  return (
    <div className="App">
      <Layout />
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
