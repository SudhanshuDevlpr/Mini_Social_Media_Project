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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5A1.5 1.5 0 1 1 3 6.5a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
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
            <svg className="bi pe-none me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
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
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                Home
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
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                View Post
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
