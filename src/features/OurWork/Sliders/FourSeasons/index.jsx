import React from "react";
import BlackBottle from "./../../../../assets/icons/blackBotttle.svg";
import BlackBG from "./../../../../assets/icons/bgBlack.svg";

function FourSeasons({ className }) {
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
}

export default FourSeasons;
