const Testimonials = () => {
  return (
    <div className="mt-5">
      <div
        className="container px-4 d-flex justify-content-center align-items-center"
        style={{ height: "450px", backgroundColor: "#FFFFFF" }}
      >
        <div
          style={{ backgroundColor: "#F7F5F9" }}
          className="card w-75 mx-auto"
        >
          <div className="card-body">
            <div className="d-flex gap-4 mb-4">
              <div className="d-flex justify-conternt-center align-items-center">
                <img className="w-100" src="/public/quote.png" alt="" />
              </div>
              <div className="d-flex justify-conternt-center align-items-center">
                <h5 className="card-title">Testimonials</h5>
              </div>
            </div>
            <p style={{ color: "#6D747A" }} className="card-text">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="position-relative">
                <img
                  style={{ height: "70px", width: "500px" }}
                  src="/public/Rectangle 85.png"
                  alt=""
                />

                <div className="position-absolute top-50 start-0">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      marginLeft: "30px",
                      transform: "translate(-50%,-50%)",
                    }}
                    className="position-absolute top-50"
                    src="/public/Ellipse 24 (1).png"
                    alt=""
                  />
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "30px",
                      transform: "translate(-50%,-50%)",
                    }}
                    className="position-absolute top-50"
                    src="/public/play_arrow_black_24dp 1 (1).png"
                    alt=""
                  />
                </div>

                <div
                  style={{ top: "35%" }}
                  className="position-absolute start-50 translate-middle-x"
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      style={{ height: "10px" }}
                      src="/public/Ellipse 25.png"
                      alt=""
                    />

                    <div
                      style={{
                        width: "250px",
                        height: "2px",
                        border: "1px",
                        backgroundColor: "white",
                      }}
                    ></div>
                    <div style={{ color: "#8064A2" }} className="mx-2">
                      0:00
                    </div>
                  </div>
                </div>

                <div className="position-absolute bottom-0 end-0">
                  <img
                    style={{ height: "30px", marginRight: "20px" }}
                    className="position-relative mb-4"
                    src="/public/Ellipse 26.png"
                    alt=""
                  />
                  <img
                    style={{ right: "30%", transform: "translate(-50%,-50%)" }}
                    className="position-absolute top-50"
                    src="/public/mic_black_24dp 1 (1).png"
                    alt=""
                  />
                </div>
              </div>
              <div style={{ marginLeft: "100px" }} className="d-flex gap-3">
                <div className="d-flex justify-content-center align-items-center">
                  <img src="/public/Ellipse 12.png" alt="" />
                </div>
                <div className="d-flex-col justify-content-center align-items-center mt-3">
                  <h6 className="fs-12" style={{ color: "#8064A2" }}>
                    Shubha Nagarajan
                  </h6>
                  <p style={{ color: "#0096C8" }}>Classical Dancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
