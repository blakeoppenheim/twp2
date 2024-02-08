import React from "react";

function OurWorkWrapper({ icon, iconName, bgColor, bgIcon }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="keen-slider__slide our-work__container"
    >
      <img className="our-work__image" src={icon} alt={iconName} />
      {bgIcon && <img src={bgIcon} className="bg-icon" />}
    </div>
  );
}

export default OurWorkWrapper;
