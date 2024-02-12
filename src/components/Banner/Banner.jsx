const Banner = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h1 className="text-xl lg:text-5xl fst-italic">
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
          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <div className="d-flex justify-between mb-4">
            <div className="fs-1 fw-semibold mx-4">Sign In</div>
            <div style={{ color: "#8064A2" }} className="fs-1 fw-semibold">
              {" "}
              <span
                style={{ color: "#8064A2", borderBottom: "2px solid #8064A2" }}
              >
                Join In
              </span>
            </div>
          </div>
          <div className="d-grid gap-2 mx-auto">
            <button
              className="btn"
              style={{
                border: "2px solid #8064A2",
                display: "flex",
                alignItems: "center",
              }}
              type="button"
            >
              <img
                style={{ marginRight: "8px" }}
                src="/public/Google.png"
                alt=""
              />
              <span style={{ marginLeft: "auto", marginRight: "auto" }}>
                Continue with Google
              </span>
            </button>
            <button
              className="btn"
              style={{
                border: "2px solid #8064A2",
                display: "flex",
                alignItems: "center",
              }}
              type="button"
            >
              <img
                style={{ marginRight: "8px" }}
                src="/public/Facebook.png"
                alt=""
              />
              <span style={{ marginLeft: "auto", marginRight: "auto" }}>
                Continue with Facebook
              </span>
            </button>
          </div>

          

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
