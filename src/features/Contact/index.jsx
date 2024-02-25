import React, { useRef } from "react";
import useWindowDimensions from "../../hooks/UseWindowDimention";
import Button from "../../components/ui/Button";
import phoneIcon from "./../../assets/icons/phone.svg";
import emailIcon from "./../../assets/icons/email.svg";
import letterSendIcon from "./../../assets/icons/letterSend.svg";

function Contact() {
  const { width } = useWindowDimensions();

  return (
    <section className="contact-page__container">
      <article className="contact-title">
        <h1
          data-aos-duration="1000"
          data-aos="fade-down"
          className="contact-title"
        >
          Contact Us
        </h1>
      </article>
      <p
        data-aos-duration="900"
        data-aos="fade-down"
        className="contact-description"
      >
        Any question or remarks? {width < 991 && <br />}
        Just write us a message!
      </p>
      <article
        data-aos-duration="1500"
        data-aos="flip-left"
        className="form-contact__container"
      >
        <div className="form-information__container">
          <h2 className="form-information__title">Contact Information</h2>
          <div className="form-information__details">
            <ul>
              <li className="phone-icon__container">
                <img src={phoneIcon} alt="phone-icon" />
              </li>
              <li className="phone-title">917-300-8211</li>
            </ul>
            <ul>
              <li className="email-icon__container">
                <img src={emailIcon} alt="email-icon" />
              </li>
              <li className="email-title">info@thewaterpeople.net</li>
            </ul>
          </div>
        </div>
        <form className="form-container">
          <div className="full-name__container">
            <div className="first-name__container">
              <label className="first-name__title">first name</label>
              <input className="first-name__field" type="text" />
            </div>
            <div className="last-name__container">
              <label className="last-name__title">last name</label>
              <input className="last-name__field" type="text" />
            </div>
          </div>
          <div className="contact-container">
            <div className="email-container">
              <label className="email-title">email</label>
              <input className="email-field" type="text" />
            </div>
            <div className="phone-number__container">
              <label className="phone-number__title">phone number</label>
              <input className="phone-number__field" type="text" />
            </div>
          </div>
          <div className="message-container">
            <label>message</label>
            <input
              className="message-field"
              placeholder="Write your message.."
              type="text"
            />
          </div>
          <Button
            link={"/twp/home"}
            className="submit-button"
            text={"Send Message"}
          />
          <img
            src={letterSendIcon}
            alt="letter-send"
            className="letter-send__icon"
          />
        </form>
      </article>
    </section>
  );
}

export default Contact;
