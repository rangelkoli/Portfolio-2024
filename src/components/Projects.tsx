import { useState, useEffect } from "react";
import AnonimoHome from "../assets/images/AnonimoHome.png";
import "../assets/styles/Projects.css";
import AnonHome from "../assets/images/AnonHome.jpeg";
import FindXHome from "../assets/images/FindXHome.png";
import WalkSafeHome from "../assets/images/WalkSafeHome.jpg";
import { motion } from "framer-motion";

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
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(3,52,110,0) 100%)",
        paddingRight: "2.5rem",
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className='card'
          onMouseEnter={() => handleCardHover(AnonHome)}
          onMouseLeave={handleCardLeave}
          style={{}}
        >
          <img src={AnonimoHome} alt='Anonimo' style={{}} />
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
            >
              {" "}
              <button className='button'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z'
                    fill='white'
                  ></path>
                </svg>
                <p className='text'>Github Link</p>
              </button>
            </div>
          </div>
        </motion.div>
        {/* Project 2*/}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className='card'
          onMouseEnter={() => handleCardHover(FindXHome)}
          onMouseLeave={handleCardLeave}
          style={{}}
        >
          <img src={FindXHome} alt='Anonimo' style={{}} />
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
            >
              {" "}
              <button className='button'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z'
                    fill='white'
                  ></path>
                </svg>
                <p className='text'>Github Link</p>
              </button>
            </div>
          </div>
        </motion.div>
        {/* Project 3*/}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className='card'
          onMouseEnter={() => handleCardHover(WalkSafeHome)}
          onMouseLeave={handleCardLeave}
          style={{}}
        >
          <img src={WalkSafeHome} alt='Anonimo' style={{}} />
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
            >
              <button className='button'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z'
                    fill='white'
                  ></path>
                </svg>
                <p className='text'>Github Link</p>
              </button>{" "}
            </div>
          </div>
        </motion.div>
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
