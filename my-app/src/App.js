import './App.scss';
import Header from "./components/header/Header.js";
import Hero from './components/hero/Hero.js';
import About from './components/about/About.js';
// import Products from './components/products/Products.js';
import Products2 from './components/products2/Products2.js';
import Services from './components/services/Services.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Products2 />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
