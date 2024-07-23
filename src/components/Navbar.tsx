import Logo from "../assets/rangelLogo.png";
const Navbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        margin: "0 auto",
        zIndex: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        padding: "1rem 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "2rem",
          paddingLeft: "2rem",
          backgroundColor: "black",
          color: "white",
          fontFamily: "Quartzo",
          fontSize: "1.5rem",
          letterSpacing: "0.2em",
          fontWeight: "bold",
          textTransform: "uppercase",
          width: "100%",
          gap: "2rem",
          maxWidth: "1000px",
          border: "1px solid white",
          borderRadius: "10px",
        }}
      >
        <div>
          <img
            src={Logo}
            alt='logo'
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div
          style={{
            gap: "2rem",
            fontFamily: "Quartzo",
            fontSize: "1rem",
            letterSpacing: "0.2em",
            fontWeight: "bold",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
