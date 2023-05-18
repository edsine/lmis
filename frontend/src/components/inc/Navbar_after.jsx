import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbarbefore() {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <img src={Logo} alt="Logo"></img>
        </Link>
        <nav id="navbar" className="navbar ">
          <ul className="px-5 navbar-nav me-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Indicators">Indicators</Link>
            </li>
            <li>
              <Link to="/sector">Sectors</Link>
            </li>
            <li>
              <Link to="/Occupation">Occupation</Link>
            </li>
            <li>
              <Link to="/Data">Data Insights</Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <span>More</span>
                <i className="bi bi-chevron-down dropdown-indicator" />
              </Link>
              <ul>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://nelexnigeria.com"
                  >
                    Find Jobs
                  </a>
                </li>
                <li>
                  <Link to="/job-statistics">NELEX Jobs Statistics</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/trending-jobs">Trending Jobs</Link>
            </li>
          </ul>
        </nav>
        {/* .navbar */}
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </div>
    </header>
  );
}

export default Navbarbefore;
