const Header = () => {
  return (
    <div id="header" className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-[#FFFFFF]"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "rgba(0, 0, 0, 0.08)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container-fluid left-0">
          <img
            style={{
              width: "100%",
              maxWidth: "250px",
              height: "60px",
              top: "10px",
              left: "7px",
            }}
            src="/public/hobby.png"
            alt="logo"
          />

          <nav className="navbar navbar-light">
            <form className="container-fluid">
              <div
                style={{
                  width: "300px",
                  height: "40px",
                  top: "10px",
                  left: "-10px",
                  borderRadius: "0px 8px 8px 0px",
                  border: "1px #EBEDF0",
                  backgroundColor: "#EBEDF0",
                }}
                className="input-group"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <span
                  style={{ backgroundColor: "#8064A2" }}
                  className="input-group-text"
                  id="basic-addon1"
                >
                  <img
                    style={{
                      width: "16px",
                      height: "16px",
                      top: "32px",
                      left: "697px",
                      borderRadius: "0px, 8px, 8px, 0px",
                      color: "white",
                    }}
                    src="/public/search.png"
                    alt=""
                  />
                </span>
              </div>
            </form>
          </nav>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      style={{
                        width: "24px",
                        height: "24px",
                        top: "28px",
                        marginRight: "10px",
                      }}
                      src="/public/explore.png"
                      alt=""
                    />
                    Explore
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        People - Community
                      </a>
                      <hr className="border-3"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Places - Venues
                      </a>
                      <hr className="border-3"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Programs - Events
                      </a>
                      <hr className="border-3"></hr>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Products - Store
                      </a>
                      <hr className="border-3"></hr>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      style={{
                        width: "24px",
                        height: "24px",
                        top: "28px",
                        marginRight: "10px",
                      }}
                      src="/public/hobbies.png"
                      alt=""
                    />
                    Hobbies
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        People - Community
                      </a>
                      <hr className="border-3"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Places - Venues
                      </a>
                      <hr className="border-3"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Programs - Events
                      </a>
                      <hr className="border-3"></hr>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Products - Store
                      </a>
                      <hr className="border-3"></hr>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    top: "28px",
                    marginLeft: "10px",
                    marginRight: "25px",
                  }}
                  src="/public/bookmark.png"
                  alt=""
                />
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    top: "28px",
                    marginRight: "25px",
                  }}
                  src="/public/notification.png"
                  alt=""
                />
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    top: "28px",
                    marginRight: "10px",
                  }}
                  src="/public/cart.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <form className="d-flex">
            <button
              className="btn btn-outline mt-2"
              style={{
                border: "1px solid #8064A2",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "112px",
                height: "40px",
                color: "#8064A2",
              }}
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
