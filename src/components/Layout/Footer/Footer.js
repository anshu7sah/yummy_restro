import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const renderFooter = () => (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center flex-wrap">
          <section className="col-12 col-md-4 footer-column">
            <p>Yummy Restaurant - A Food Delivery Startup</p>
            <p>Copyright &copy; 2021</p>
          </section>
          <section className="col-12 col-md-4 footer-column">
            <ul>
              <li>
                <a href="/delivery">Delivery Policy</a>
              </li>
              <li>
                <a href="/returns">Returns</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </section>
          <section className="col-12 col-md-4 footer-column">
            <div>
              <a href="/git#">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="/fb#">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="/twt#">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="/link#">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
  return <>{renderFooter()}</>;
};

export default Footer;
