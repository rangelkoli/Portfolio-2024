import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSec from "./components/HeroSec";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSec />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden",
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(3,52,110,1) 100%)",
        }}
      >
        <h1></h1>
        asd
      </div>
      <Projects />
    </>
  );
}

export default App;
