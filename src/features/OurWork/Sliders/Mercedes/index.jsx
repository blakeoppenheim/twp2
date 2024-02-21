import React from "react";
import bgImage from "./../../../../assets/icons/mercedesBgBottle.svg";
import bottle from "./../../../../assets/icons/mercedesBottleIcons.svg";
import bgRoundedBg from "./../../../../assets/icons/MercedesLogo.svg";

function MercedesSection({className}) {
  return (
    <section className={`${className} mercedes-bottle__container`} >
      <h1 data-aos-duration="2000" data-aos="fade-up" className="title">
        Mercedes
      </h1>
      <img src={bgImage} className="bg-image" alt="bg-image" />
      <img src={bgRoundedBg} className="bg-image__rounded" alt="bg-image" />
      <img src={bottle} className="bottle-image" alt="bottle-image" />
    </section>
  );
}

export default MercedesSection;
