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
              <span className="mx-auto">
                Continue with Google
              </span>
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
              <span className="mx-auto">
                Continue with Facebook
              </span>
            </button>
          </div>

          <div>
            <div className="d-flex align-items-center mt-3">
            <hr className="flex-grow-1 mr-2"></hr><span className="mx-3">Or connect with</span><hr className="flex-grow-1 mr-2"></hr>
            </div>
           
          
          </div>

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
