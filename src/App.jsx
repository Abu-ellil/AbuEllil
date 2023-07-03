import Header from './components/Header'
import Home from './components/Home'
import About from "./components/Header";
import Services from "./components/Header";
import Portfolio from "./components/Header";
import Certifications from "./components/Header";
import Contact from "./components/Header";
import Footer from "./components/Header";
import ToTopButton from "./components/ToTopButton";
import "./style/style.css";
function App() {
  return (
    <>
    <Header/>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
      <ToTopButton />
    </>
  );
}

export default App;
