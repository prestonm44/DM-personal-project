import React from 'react';
import '../bootstrap/phoenix-v1/assets/css/theme.css';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column" id="navbarVerticalNav">
              <li className="nav-item"></li>
              
              <li className="nav-item">
                {/* label*/}
                <p className="navbar-vertical-label">Pages</p>
                <hr className="navbar-vertical-line" />
                
                 {/* parent pages*/}
                 <div className="nav-item-wrapper"><a className="nav-link active label-1" href="../pages/buildings.html" role="button" data-bs-toggle="" aria-expanded="false">
                  <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="users"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Buildings</span></span>
                  </div>
                </a>
              </div> 
                
                {/* parent pages*/}
                  <div className="nav-item-wrapper"><a className="nav-link label-1" href="../pages/users.html" role="button" data-bs-toggle="" aria-expanded="false">
                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="users"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Users</span></span>
                    </div>
                  </a>
                </div>
                
                 {/* parent pages*/}
                 <div className="nav-item-wrapper"><a className="nav-link label-1" href="../pages/accessPoints.html" role="button" data-bs-toggle="" aria-expanded="false">
                  <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="users"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Access Points</span></span>
                  </div>
                </a>
              </div>
            </ul>
        </nav>
    );
};

export default NavBar;