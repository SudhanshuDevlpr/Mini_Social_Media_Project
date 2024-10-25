import React from "react";

function SideBar({ sideValue, setSideVlaue }) {
  return (
    <>
      {/* Three-dot toggle button for small screens */}
      <button
        className="btn btn-dark d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
        style={{ position: "absolute", top: "10px", left: "10px" }}
      >
        <i className="bi bi-three-dots-vertical"></i> {/* Bootstrap Icon */}
      </button>

      {/* Sidebar - Offcanvas for small screens and sticky sidebar for larger screens */}
      <div
        className="offcanvas-lg offcanvas-start text-bg-dark"
        id="offcanvasSidebar"
        tabIndex="-1"
        aria-labelledby="offcanvasSidebarLabel"
        style={{ width: "180px" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
            Sidebar
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column p-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <i className="bi bi-bootstrap me-2" style={{ fontSize: "1.5rem" }}></i>
            <span className="fs-4">Sidebar</span>
          </a>
          <hr />

          <ul className="nav nav-pills flex-column mb-auto">
            <li
              className="nav-item"
              onClick={() => {
                setSideVlaue("Home");
                console.log(sideValue);
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  sideValue === "Home" ? "active" : "text-white"
                }`}
                aria-current="page"
              >
                <i className="bi bi-house-door me-2"></i> Home
              </a>
            </li>
            <li
              onClick={() => {
                setSideVlaue("View Post");
                console.log(sideValue);
              }}
            >
              <a
                href="#"
                className={`nav-link ${
                  sideValue === "View Post" ? "active" : "text-white"
                }`}
              >
                <i className="bi bi-speedometer2 me-2"></i> View Post
              </a>
            </li>
          </ul>
          <hr />

          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
