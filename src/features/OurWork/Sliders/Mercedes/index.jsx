import React from "react";
import bgImage from "./../../../../assets/icons/mercedesBgBottle.svg";
import bottle from "./../../../../assets/icons/newMercedesBottle.svg";
import bgRoundedBg from "./../../../../assets/icons/MercedesLogo.svg";
import OurWorkWrapper from "../../OurWorkWrapper";
import { OUR_WORK } from "../../../../constants/ourWork";
import useWindowDimensions from "../../../../hooks/UseWindowDimention";
function MercedesSection({ className }) {
  const { width } = useWindowDimensions();
  const { mercedes } = OUR_WORK;
  if (width < 991) {
    return (
      <section className={`${className} mercedes-bottle__container`}>
        <h1 data-aos-duration="2000" data-aos="fade-up" className="title">
          Mercedes
        </h1>
        <img src={bgImage} className="bg-image" alt="bg-image" />
        <img src={bgRoundedBg} className="bg-image__rounded" alt="bg-image" />
        <img src={bottle} className="bottle-image" alt="bottle-image" />
      </section>
    );
  } else {
    return <OurWorkWrapper data={mercedes} />;
  }
}

export default MercedesSection;
