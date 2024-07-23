import { useState, useEffect } from "react";
import AnonimoHome from "../assets/images/AnonimoHome.png";
import "../assets/styles/Projects.css";
import AnonHome from "../assets/images/AnonHome.jpeg";
import FindXHome from "../assets/images/FindXHome.png";
import WalkSafeHome from "../assets/images/WalkSafeHome.jpg";
const Projects = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleCardHover = (image: string) => {
    setHoveredImage(image);
  };

  const handleCardLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id='projects'
      style={{
        padding: "2rem",
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(3,52,110,0) 100%)",
      }}
    >
      <h1
        style={{
          fontFamily: "Quartzo",
        }}
      >
        Projects
      </h1>
      <div
        className='container'
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <div
          className='card'
          onMouseEnter={() => handleCardHover(AnonHome)}
          onMouseLeave={handleCardLeave}
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "300px",
            maxWidth: "1000px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1d232a",
            color: "white",
            padding: "1rem",
          }}
        >
          <img
            src={AnonimoHome}
            alt='Anonimo'
            style={{
              width: "500px",
              height: "300px",
              imageOrientation: "center",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontFamily: "Quartzo",
              }}
            >
              Anonimo
            </h2>
            <p
              style={{
                textAlign: "justify",
              }}
            >
              Anonimo is a social media website allowing users to make posts
              expressing their emotioms. The website also have support for a
              therapist section where users can make appointments with
              therapists and have a chat with them.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            ></div>
          </div>
        </div>
        {/* Project 2*/}
        <div
          className='card'
          onMouseEnter={() => handleCardHover(FindXHome)}
          onMouseLeave={handleCardLeave}
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "300px",
            maxWidth: "1000px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1d232a",
            color: "white",
            padding: "1rem",
          }}
        >
          <img
            src={FindXHome}
            alt='Anonimo'
            style={{
              width: "500px",
              height: "300px",
              imageOrientation: "center",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontFamily: "Quartzo",
              }}
            >
              Find X
            </h2>
            <p
              style={{
                textAlign: "justify",
              }}
            >
              FindX is a webapp which allows users to scan the face of a
              suspicious(missing) person and detect whether the captured image
              is of a missing person or not and notify the nearest and root
              police stations.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            ></div>
          </div>
        </div>
        {/* Project 3*/}
        <div
          className='card'
          onMouseEnter={() => handleCardHover(WalkSafeHome)}
          onMouseLeave={handleCardLeave}
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "300px",
            maxWidth: "1000px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1d232a",
            color: "white",
            padding: "1rem",
          }}
        >
          <img
            src={WalkSafeHome}
            alt='Anonimo'
            style={{
              width: "500px",
              height: "300px",
              imageOrientation: "center",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontFamily: "Quartzo",
              }}
            >
              WalkSafe
            </h2>
            <p
              style={{
                textAlign: "justify",
              }}
            >
              Introducing WalkSafe, your ultimate companion for ensuring the
              safety of your loved ones while navigating through the city.
              WalkSafe is a comprehensive mobile application available on both
              Android and iOS platforms, designed to provide real-time tracking,
              route optimization, and safety alerts to keep you and your family
              secure at all times.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      {hoveredImage && (
        <div
          style={{
            position: "fixed",
            top: cursorPosition.y + 5,
            left: cursorPosition.x + 5,
            color: "white",
            width: "300px",
            backgroundColor: "black",
          }}
        >
          <img
            src={hoveredImage}
            alt='logo'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
