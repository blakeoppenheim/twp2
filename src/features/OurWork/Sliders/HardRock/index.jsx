import React from "react";
import hardRockBottle from "./../../../../assets/icons/hardRockBottle.svg";
import logo from "./../../../../assets/icons/hardRockLogo.svg";

function HardRock({ className }) {
  return (
    <section className={`${className} hard-rock__container`}>
      <div className="image-container__logo">
        <img src={logo} className="hard-rock__logo" alt="black-bg" />
      </div>
      <div className="image-container__bottle">
        <img
          src={hardRockBottle}
          className="hard-rock__bottle"
          alt="black-bg"
        />
      </div>
    </section>
  );
}

export default HardRock;
