import React from 'react';
import '../bootstrap/phoenix-v1/assets/css/theme.css';

const NavBar = () => {
  return (
      <><nav className="navbar navbar-vertical navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        {/* scrollbar removed*/}
        <div className="navbar-vertical-content">
          <ul className="navbar-nav flex-column" id="navbarVerticalNav">
            <li className="nav-item"></li>

            <li className="nav-item">
              {/* label*/}
              <p className="navbar-vertical-label">Pages</p>
              <hr className="navbar-vertical-line" />

              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <a
                  className="nav-link label-1"
                  href="../pages/buildings.html"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="users"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Buildings</span>
                    </span>
                  </div>
                </a>
              </div>

              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <a
                  className="nav-link active label-1"
                  href="../pages/users.html"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="users"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Users</span>
                    </span>
                  </div>
                </a>
              </div>

              {/* parent pages*/}
              <div className="nav-item-wrapper">
                <a
                  className="nav-link label-1"
                  href="../pages/accessPoints.html"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather="users"></span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">Access Points</span>
                    </span>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="navbar-vertical-footer">
          <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
            <span className="uil uil-left-arrow-to-left fs-8"></span>
            <span className="uil uil-arrow-from-right fs-8"></span>
            <span className="navbar-vertical-footer-text ms-2">Collapsed View</span>
          </button>
        </div>
      </div>
    </nav><nav className="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-logo">
            <button
              className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarVerticalCollapse"
              aria-controls="navbarVerticalCollapse"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggle-icon">
                <span className="toggle-line"></span>
              </span>
            </button>
            <a className="navbar-brand me-1 me-sm-3" href="../index.html">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src="../assets/img/icons/logo.png" alt="phoenix" width="27" />
                  <h5 className="logo-text ms-2 d-none d-sm-block">Preston's Project</h5>
                </div>
              </div>
            </a>
          </div>
          <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item">
              <div className="theme-control-toggle fa-icon-wait px-2">
                <input
                  className="form-check-input ms-0 theme-control-toggle-input"
                  type="checkbox"
                  data-theme-control="phoenixTheme"
                  value="dark"
                  id="themeControlToggle" />
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                  for="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Switch theme"
                  style="height:32px;width:32px;"
                >
                  <span className="icon" data-feather="moon"></span>
                </label>
                <label
                  className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                  for="themeControlToggle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Switch theme"
                  style="height:32px;width:32px;"
                >
                  <span className="icon" data-feather="sun"></span>
                </label>
              </div>
            </li>
            <li className="nav-item dropdown"></li>
            <li className="nav-item dropdown">
              <a
                className="nav-link lh-1 pe-0"
                id="navbarDropdownUser"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="avatar avatar-l ">
                  <img className="rounded-circle " src="../assets/img/team/40x40/57.webp" alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </>
  );
};

export default NavBar;