import React from "react";
import Spline from "@splinetool/react-spline";
import "../assets/styles/HeroSec.css";
const HeroSec = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflowX: "hidden",
        backgroundColor: "black",
      }}
    >
      <div
        className=''
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className='scrolldown' style={{ color: "skyblue" }}>
          <div className='chevrons'>
            <div className='chevrondown'></div>
            <div className='chevrondown'></div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "calc(2rem + 3vw)",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Quartzo",
            fontSizeAdjust: "0.58",
            letterSpacing: "0.2em",
            marginBottom: "0",
          }}
        >
          RANGEL KOLI
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "calc(0.8rem + 1vw)",
            textAlign: "center",
            fontFamily: "Quartzo",
            fontSizeAdjust: "0.58",
            letterSpacing: "0.3em",
            marginTop: "0",
          }}
        >
          turnining ideas into reality.
        </p>
      </div>
      <Spline
        scene='https://prod.spline.design/1TNgghFeM0AVZia8/scene.splinecode'
        renderOnDemand={true}
        style={{ width: "100%", height: "100%" }}
        lang='en'
        onLoad={() => console.log("loaded")}
        onWaiting={() => console.log("waiting")}
      />
    </div>
  );
};

export default HeroSec;
