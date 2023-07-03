import Header from './components/Header'
import Home from './components/Home'
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTopButton from "./components/ToTopButton";
import "./style/style.css";
function App() {
  return (
    <div>
    <Header/>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
      <ToTopButton />
    </div>
  );
}

export default App;
