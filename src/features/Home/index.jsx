import React from "react";
import BottleIcon from "./../../assets/icons/bottle.svg";
import BottleHead from "./../../assets/icons/bottleHead.svg";
import OpenedBottle from "./../../assets/icons/bottleOppen.svg";
import HomeDetails from "./HomeDetails";

function Home() {
  return (
    <section id="home" className="header-section">
      <HomeDetails />
      <img className="bottle-head" src={BottleHead} alt="bottle-head" />
      <img className="bottle-icon" src={OpenedBottle} alt="bottle-icon" />
    </section>
  );
}

export default Home;
