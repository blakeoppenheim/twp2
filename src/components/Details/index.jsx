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
    <section
      id={id}
      className={`${
        id === "ourStory" ? " large-container" : "details-container"
      }`}
    >
      <div className="details-wrapper">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          className="details-info"
        >
          <h1 className="details-title">
            {title}
            <span className="point">.</span>{" "}
          </h1>
          <p className="details-description">{description.firstSection}</p>
          <br />
          {description.secondSection && (
            <p className="description">{description.secondSection}</p>
          )}
          <br />
          {description.thirdSection && (
            <p className="description">{description.thirdSection}</p>
          )}
          <br />
          {description.fourthSection && (
            <p className="description quote">{description.fourthSection}</p>
          )}
          <br />
          {description.fifthSection && (
            <p className="description">{description.fifthSection}</p>
          )}
          <br />
          {description.sixSection && (
            <p className="description">{description.sixSection}</p>
          )}
          <br />
          {description.sevenSection && (
            <p className="description">{description.sevenSection}</p>
          )}
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-left"
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
