import React from "react";
import BottleIcon from "./../../assets/icons/bottle.svg";
import BottleHead from "./../../assets/icons/headOfBottle.svg";
import OppnedBottle from "./../../assets/icons/bottleHeader.svg";
import HomeDetails from "./HomeDetails";

function Home() {
  return (
    <section id="home" className="header-section">
      <HomeDetails />
      <img className="bottle-head" src={BottleHead} alt="bottle-head" />
      <img className="bottle-icon" src={OppnedBottle} alt="bottle-icon" />
    </section>
  );
}

export default Home;
