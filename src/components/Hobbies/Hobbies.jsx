const Hobbies = () => {
  return (
    <div style={{marginTop: "10px"}}>
      <div
        className="container px-4 d-flex justify-content-center align-items-center position-relative"
        style={{ height: "100vh" }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{ backgroundColor: "#F7FDFF" }}
        >
          <div>
            <h1
              style={{ marginBottom: "50px" }}
              className="text-xl lg:text-5xl fst-italic p-5"
            >
              Your <span style={{ color: "#8064A2" }}>Hobby,</span> Your
               <span style={{ color: "#0096C8" }}> Community...</span>
            </h1>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <button
                className="btn btn-outline mx-5"
                style={{
                  border: "1px solid #8064A2",
                  borderRadius: "8px",
                  backgroundColor: "#8064A2",
                  color: "white",
                  margin: "2px",
                }}
                type="submit"
              >
                Get started
              </button>
            </div>
            <div>
              <a href="#header">
                <img className="px-5" src="/public/Group 77 (1).png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img
            style={{ position: "absolute", top: "50%", width: "100%" }}
            src="/public/Group 99.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
