import React from "react";
import Spline from "@splinetool/react-spline";

const HeroSec = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Spline
        scene='https://prod.spline.design/1TNgghFeM0AVZia8/scene.splinecode'
        renderOnDemand={true}
        style={{ width: "100%", height: "100%" }}
        lang='en'
        onLoad={() => console.log("loaded")}
        onWaiting={() => console.log("waiting")}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "3rem",
        }}
      >
        Rangel Koli
      </div>
    </div>
  );
};

export default HeroSec;
