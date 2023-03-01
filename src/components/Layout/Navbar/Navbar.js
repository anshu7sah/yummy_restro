import React from "react";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import logo from "../../../assets/images/dosa.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.log(window.location.pathname);
  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="img-label">
            <img src={logo} alt="logo" className="logo" />
            <label className="logo-label">
              <span className="logo-label-part1">
                <span className="logo-label-part3">y</span>ummy
              </span>
              <br />
              <span className="logo-label-part2">Rest</span>
            </label>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: "var(--primary-green)",
            color: "var(--primary-white)",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className={
                  window.location.pathname === "/catalog"
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current="page"
                to="/catalog"
              >
                Browse
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Cart
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                size="40"
              />
              <button
                className="btn btn-outline-success"
                style={{
                  background: "var(--primary-green)",
                  color: "var(--primary-white)",
                }}
                type="submit"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
  return <>{renderNavbar()}</>;
};

export default Navbar;
