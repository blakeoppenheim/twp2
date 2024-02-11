import React from "react";
import useWindowDimensions from "../../hooks/UseWindowDimention";
import Benefits from "../Benefits";

function Details({ data }) {
  const { width } = useWindowDimensions();
  const {
    title,
    description,
    icon,
    hasBackgroundIcon,
    id,
    hasBottomBenefitsIcons,
  } = data;

  return (
    <section className="details-container">
      <div className="details-wrapper">
        <div
          data-aos-duration="1000"
          data-aos="fade-down-right"
          className="details-info"
        >
          <h1 id={id} className="details-title">
            {title}
            <span className="point">.</span>{" "}
          </h1>
          <p className="details-description">{description}</p>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-in-down"
          className={
            hasBackgroundIcon
              ? "details-image__container"
              : "details-image__wrapper"
          }
        >
          <img className="detail-image" src={icon} alt="detail-icon" />
        </div>
      </div>

      {hasBottomBenefitsIcons && width < 991 && <Benefits />}
    </section>
  );
}

export default Details;
