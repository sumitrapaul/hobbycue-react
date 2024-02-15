const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="fw-bold fs-6">Hobbycue</h5>
            <ul style={{ color: "#08090A" }} className="list-unstyled">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold fs-6">How Do I</h5>
            <ul style={{ color: "#08090A" }} className="list-unstyled">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold fs-6">Quick Links</h5>
            <ul style={{ color: "#08090A" }} className="list-unstyled">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold fs-6 mb-2">Social Media</h5>
            <img
              style={{ marginRight: "12px" }}
              src="/public/Group 60.png"
              alt=""
            />
            <img
              style={{ marginRight: "12px" }}
              src="/public/Group 61.png"
              alt=""
            />
            <img
              style={{ marginRight: "12px" }}
              src="/public/Group 62.png"
              alt=""
            />
            <img
              style={{ marginRight: "12px" }}
              src="/public/Group 63.png"
              alt=""
            />
            <img
              style={{ marginRight: "12px" }}
              src="/public/Group 59.png"
              alt=""
            />
            <img
              style={{ marginRight: "12px" }}
              src="/public/Group 58.png"
              alt=""
            />
            <img
              style={{ marginRight: "12px" }}
              src="/public/Group 57.png"
              alt=""
            />
            <img src="/public/Group 56.png" alt="" />
            <h5 className="fw-bold fs-6 mt-5">Invite Friends</h5>
            <form className="container-fluid">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  style={{ marginLeft: "-10px", border: "1px solid #8064A2" }}
                  placeholder="Email ID"
                  aria-label="Email ID"
                  aria-describedby="basic-addon1"
                />
                <span
                  style={{
                    border: "1px solid #8064A2",
                    backgroundColor: "#8064A2",
                    color: "white",
                  }}
                  className="input-group-text fs-6"
                  id="basic-addon1"
                >
                  Invite
                </span>
              </div>
            </form>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#F7F5F9" }}
          className="d-flex mt-3 justify-content-center align-items-center"
        >
          <p style={{ color: "#08090A" }} className="fw-medium mt-3 fs-6">
            © Purple Cues Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
