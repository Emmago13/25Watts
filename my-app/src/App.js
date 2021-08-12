import './App.scss';
import Header from "./components/header/Header.js";
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Products from './components/products/Products.js';
import Services from './components/services/Services.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
