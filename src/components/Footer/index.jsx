import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import phoneIcon from "./../../assets/icons/phone.svg";
import emailIcon from "./../../assets/icons/email.svg";

function Footer() {
  const navigate = useNavigate();
  const currentPath = useLocation();

  const handleScrollToElement = (ref) => {
    if (currentPath.pathname === "/twp/contact-us") {
      navigate("/twp/home");
    } else {
      document.getElementById(ref).scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="footer-container">
      <div className="footer-top__section">
        <p className="subtitle">Feel Free To Contact Us</p>
        <h2 className="title">
          917-300-8211 <br />
          info@thewaterpeople.net
        </h2>
        <Button
          link={"/twp/contact-us"}
          text="Get a Quote"
          className="footer-btn"
        />
        <p className="country-title"></p>
      </div>
      <div className="footer-bottom__section">
        <h3 className="logo-title">TWP</h3>
        <div className="footer-info">
          <ul className="info-list">
            <li>Reach us</li>
            <li>
              <img src={phoneIcon} alt="phone-icon" />
              917-300-8211
            </li>
            <li>
              <img src={emailIcon} alt="email-icon" />
              info@thewaterpeople.net
            </li>
          </ul>
          <ul className="info-list">
            <li>Company</li>
            <li
              onClick={() => {
                handleScrollToElement("about");
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                navigate("/twp/contact-us");
              }}
            >
              Contact
            </li>
          </ul>
          <ul className="info-list">
            <li>Quick Links</li>
            <li
              onClick={() => {
                handleScrollToElement("ourStory");
              }}
            >
              Our Story
            </li>
            <li
              onClick={() => {
                handleScrollToElement("ourSource");
              }}
            >
              Our Source
            </li>
            <li
              onClick={() => {
                handleScrollToElement("products");
              }}
            >
              Products
            </li>
          </ul>
        </div>
      </div>
      <h4 className="copy-right__title">
        <span>&#169;</span>
        2024 The Water People. All Rights Reserved.
      </h4>
    </footer>
  );
}

export default Footer;
