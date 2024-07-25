import "../assets/styles/Socials.css";
const Socials = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "black",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          color: "white",
        }}
      >
        <h1>Connect With me</h1>
        <div>
          <button style={{}}>
            <svg
              viewBox='0 0 16 16'
              className='bi bi-facebook'
              fill='currentColor'
              height='16'
              width='16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
            </svg>
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Socials;
