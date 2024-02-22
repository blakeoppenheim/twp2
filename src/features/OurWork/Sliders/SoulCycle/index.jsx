import React from "react";
import bgImage from "./../../../../assets/icons/SoulCycleBg.svg";
import bottle from "./../../../../assets/icons/soulCycleImg.svg";
import bgRoundedBg from "./../../../../assets/icons/roundedBg.svg";
import useWindowDimensions from "../../../../hooks/UseWindowDimention";
import OurWorkWrapper from "../../OurWorkWrapper";
import { OUR_WORK } from "../../../../constants/ourWork";
function SoulCycle({ className }) {
  const { width } = useWindowDimensions();
  const { soulBottle } = OUR_WORK;
  return (
    <section className={`${className} soucycle-bottle__container `}>
      <h1 data-aos-duration="2000" data-aos="fade-up" className="title">
        Soulcyle
      </h1>
      <img src={bgImage} className="bg-image" alt="bg-image" />
      <img src={bgRoundedBg} className="bg-image__rounded" alt="bg-image" />
      <img src={bottle} className="bottle-image" alt="bottle-image" />
    </section>
  );
}

export default SoulCycle;
