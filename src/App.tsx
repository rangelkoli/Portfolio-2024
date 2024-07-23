import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSec from "./components/HeroSec";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
          backgroundColor: "black",
        }}
      >
        asd
      </div>
    </>
  );
}

export default App;
