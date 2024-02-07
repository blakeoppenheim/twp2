import React from "react";

function Details({ data }) {
  const { title, description, icon, hasBackgroundIcon } = data;

  return (
    <section className="details-container">
      <div className="details-wrapper">
        <div
          data-aos-duration="1000"
          data-aos="fade-down-right"
          className="details-info"
        >
          <h1 className="details-title">
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
    </section>
  );
}

export default Details;
