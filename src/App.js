import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [x,setX] = useState();
  return (
    <div >
      {/* <NavBar /> */}
      <Hero />
      <About />
      <ProjectSection />
      <Contact />
    </div>
  );
}

export default App;
