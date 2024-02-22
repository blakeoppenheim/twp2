import React from "react";
import BlackBottle from "./../../../../assets/icons/blackBotttle.svg";
import BlackBG from "./../../../../assets/icons/bgBlack.svg";
import OurWorkWrapper from "../../OurWorkWrapper";
import { OUR_WORK } from "../../../../constants/ourWork";
import useWindowDimensions from "../../../../hooks/UseWindowDimention";
function FourSeasons({ className }) {
  const { width } = useWindowDimensions();
  const { fourSeason } = OUR_WORK;
  if (width < 991) {
    return (
      <section className={`${className} four-seasons__container`}>
        <h1 data-aos-duration="2000" data-aos="fade-right" className="title">
          Four <br />
          Seasons
        </h1>
        <img
          src={BlackBottle}
          className="four-season__bottle"
          alt="fourSeason-bottle"
        />
        <img src={BlackBG} className="black-bg" alt="black-bg" />
      </section>
    );
  } else {
    return <OurWorkWrapper data={fourSeason} />;
  }
}

export default FourSeasons;
