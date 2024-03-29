import React from "react";
import {
  faBars,
  faSearch,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import logo from "../../../assets/images/dosa.jpg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { getTotalItemsInCart } from "../../Cart/CartHandler";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();
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
        <div className="d-block d-lg-none">
          <Link
            className={
              window.location.pathname === "/cart"
                ? "nav-link active"
                : "nav-link"
            }
            to="/cart"
          >
            <FontAwesomeIcon icon={faCartPlus} style={{ color: "orangered" }} />
            <span>
              <sup>
                <small className="cart-badge">{getTotalItemsInCart()}</small>{" "}
              </sup>{" "}
            </span>
          </Link>
        </div>
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
            {!isAuthenticated && (
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === "/signIn"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/signin"
                >
                  Sign In
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === "/register"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/signup"
                >
                  Register
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === "/me"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/me"
                >
                  <span
                    style={{
                      background: "var(--primary-navy)",
                      color: "var(--primary-white)",
                      padding: "5px 30px",
                      borderRadius: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {user.name}
                  </span>
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === "/cart"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/cart"
              >
                Cart&nbsp;
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ color: "orangered" }}
                />
                <span>
                  <sup>
                    <small className="cart-badge">
                      {getTotalItemsInCart()}
                    </small>{" "}
                  </sup>{" "}
                </span>
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link
                  className={
                    window.location.pathname === "/signout"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/signout"
                >
                  Sign out
                </Link>
              </li>
            )}
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
