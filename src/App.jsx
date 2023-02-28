import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certificates";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100
    })
  }, [])

  const idiomas = [{
    id: 1,
    text: 'See in English'
  }, {
    id: 2,
    text: 'Ver en Español'
  }]

  const [idioma, setIdioma] = useState(idiomas[0])
  const handleIdioma = () => {
    if (idioma.id == 1) {
      setIdioma(idiomas[1])
    }
    if (idioma.id == 2) {
      setIdioma(idiomas[0])
    }
  }
  return (
    <div className="">
      <button onClick={handleIdioma} className="z-[99999] absolute top-[64px] left-8 md:top-24 md:left-14 lg:top-20 lg:left-10 text-center font-medium hover:opacity-70 p-2 rounded-md cursor-pointer bg-primaryLinear">{idioma.text}</button>
      <Nav idioma={idioma} />
      <Hero idioma={idioma} />
      <Skills idioma={idioma} />
      <AboutMe idioma={idioma} />
      <Projects idioma={idioma} />
      <Certificates idioma={idioma}/>
      <Contact idioma={idioma} />
    </div>
  );
};

export default App;
