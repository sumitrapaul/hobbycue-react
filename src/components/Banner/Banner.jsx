import { useState } from "react";

const Banner = () => {
  const [joinForm, setJoinForm] = useState(true);
  const [signForm, setSignForm] = useState(false);

  const handleSign = () => {
    setJoinForm(false);
    setSignForm(true);
  };
  const handleJoin = () => {
    setJoinForm(true);
    setSignForm(false);
  };

  return (
    <div className="container" style={{ backgroundColor: "#F7F5F9" }}>
      <div className="row mt-5">
        <div className="col-lg-6 mt-3">
          <h1
            style={{ marginBottom: "50px" }}
            className="text-xl lg:text-5xl fst-italic"
          >
            Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
            <span style={{ color: "#8064A2" }}>passion</span>
          </h1>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p style={{ marginBottom: "110px" }}>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <img
            className="img-fluid"
            style={{ maxWidth: "100%", width: "700px" }}
            src="/public/Group 27.png"
            alt=""
          />
        </div>

        <div className="col-lg-6">
          <div className="mb-4 mt-0">
            <ul className="nav nav-tabs border-0">
              <li className="nav-item">
                <a
                  onClick={handleSign}
                  style={{
                    color: signForm ? "#8064A2" : "black",
                    borderBottom: signForm ? "2px solid #8064A2" : "none",
                  }}
                  className="nav-link fs-1 fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={handleJoin}
                  style={{
                    color: joinForm ? "#8064A2" : "black",
                    borderBottom: joinForm ? "2px solid #8064A2" : "none",
                  }}
                  className="nav-link fs-1 fw-semibold"
                  href="#"
                >
                  Join In
                </a>
              </li>
            </ul>
          </div>
          <div className="d-grid gap-2 mx-auto">
            <button
              className="btn mb-3 d-flex align-items-center"
              style={{
                border: "2px solid #8064A2",
              }}
              type="button"
            >
              <img
                style={{ marginRight: "8px" }}
                src="/public/Google.png"
                alt=""
              />
              <span className="mx-auto">Continue with Google</span>
            </button>
            <button
              className="btn mb-3 d-flex align-items-center"
              style={{
                border: "2px solid #8064A2",
              }}
              type="button"
            >
              <img
                style={{ marginRight: "8px" }}
                src="/public/Facebook.png"
                alt=""
              />
              <span className="mx-auto">Continue with Facebook</span>
            </button>
          </div>

          <div>
            <div className="d-flex align-items-center mt-3">
              <hr className="flex-grow-1 mr-2"></hr>
              <span className="mx-3">Or connect with</span>
              <hr className="flex-grow-1 mr-2"></hr>
            </div>
          </div>

          {joinForm && (
            <form>
              <div className="mb-4 mt-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center position-relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <div className="position-absolute end-0 px-3">
                  <img className="ml-8" src="/public/Password.png" alt="" />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <div
                    style={{
                      width: "60px",
                      height: "4px",
                      color: "#939CA3",
                      border: "1px solid #939CA3",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "60px",
                      height: "4px",
                      border: "1px solid #939CA3",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "60px",
                      height: "4px",
                      border: "1px solid #939CA3",
                    }}
                  ></div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <p style={{ color: "#939CA3" }}>Password Strength</p>
                </div>
              </div>
              <p style={{ fontSize: "22px" }}>
                <span style={{ color: "#6D747A" }}>
                  By continuing, you agree to our
                </span>{" "}
                Terms of Service <span style={{ color: "#6D747A" }}>and</span>{" "}
                Privacy Policy.
              </p>
              <div className="d-grid">
                <button
                  style={{ backgroundColor: "#8064A2", color: "white" }}
                  type="submit"
                  className="btn"
                >
                  Agree and Continue
                </button>
              </div>
            </form>
          )}

          {signForm && (
            <form>
              <div className="mb-4 mt-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center position-relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <div className="position-absolute end-0 px-3">
                  <img className="ml-8" src="/public/Password.png" alt="" />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <p>
                    <img className="mx-2" src="/public/Vector (2).png" alt="" />{" "}
                    Forgot password?
                  </p>
                </div>
              </div>

              <div className="d-grid">
                <button
                  style={{ backgroundColor: "#8064A2", color: "white" }}
                  type="submit"
                  className="btn"
                >
                  Continue
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
