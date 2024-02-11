import React from "react";
import Button from "../ui/Button";
import Social from "./../../assets/icons/Social.svg";
import facebookIcon from "./../../assets/icons/facebookIcon.svg";
import twitterIcon from "./../../assets/icons/TwitterIcon.svg";
import phoneIcon from "./../../assets/icons/phone.svg";
import emailIcon from "./../../assets/icons/email.svg";
import location from "./../../assets/icons/location.svg";
import useWindowDimensions from "../../hooks/UseWindowDimention";

function Footer() {
  const { width } = useWindowDimensions();
  return (
    <footer className="footer-container">
      <div className="footer-top__section">
        <p className="subtitle">Feel Free To Contact Us</p>
        <h2 className="title">
          +1-WAT-ERP-EOPL <br />
          tpatnyc@gmail.com
        </h2>
        <Button text="Get a Quote" className="footer-btn" />
        <p className="country-title">
          Weston, CT <br />
          USA
        </p>
        <div className="social-media__section">
          <img
            src={facebookIcon}
            className="facebook-icon"
            alt="facebook-icon"
          />
          <img src={twitterIcon} className="twitter-icon" alt="twitter-icon" />
          <img
            src={Social}
            className="social-media__icon"
            alt="social-media__icon"
          />
        </div>
      </div>
      <div className="footer-bottom__section">
        <h3 className="logo-title">TWP</h3>
        <div className="footer-info">
          <ul className="info-list">
            <li>Reach us</li>
            <li>
              <img src={phoneIcon} alt="phone-icon" />
              +1 THE-WTR-PEPL
            </li>
            <li>
              <img src={emailIcon} alt="email-icon" />
              tpatnyc@gmail.com
            </li>
            <li>
              <img src={location} alt="phone-icon" />
              {width > 991 ? (
                <>
                  132 Dartmouth Street Boston,
                  <br /> Massachusetts 02156 United States{" "}
                </>
              ) : (
                <>
                  123 Street <br /> Place, State 12345b <br /> United States
                </>
              )}
            </li>
          </ul>
          <ul className="info-list">
            <li>Company</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="info-list">
            <li>Quick Links</li>
            <li>Our Story</li>
            <li>Our Source</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
      <h4 className="copy-right__title">
        <span>&#169;</span>
        TheWaterPeople. All Rights Reserved.
      </h4>
    </footer>
  );
}

export default Footer;
