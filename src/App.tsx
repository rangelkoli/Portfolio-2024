import "./App.css";
import HeroSec from "./components/HeroSec";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <Projects />
      <TechStack />
      <Socials />
    </>
  );
}

export default App;
