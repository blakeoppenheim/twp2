import React from "react";
import useWindowDimensions from "../../../hooks/UseWindowDimention";

function OurWorkWrapper({ data }) {
  const { width } = useWindowDimensions();
  const { icon, iconName, bgColor, bgIcon } = data;
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="keen-slider__slide our-work__container"
    >
      <img
        className={
          bgColor === "#EBDF01"
            ? "scaled-work__image our-work__image"
            : "our-work__image"
        }
        src={icon}
        alt={iconName}
      />
      {bgIcon && width > 500 && <img src={bgIcon} className="bg-icon" />}
    </div>
  );
}

export default OurWorkWrapper;
