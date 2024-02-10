import React from "react";
import { BRANDS } from "../../constants/brands";

function Brands() {
  return (
    <section className="brands-container">
      <div className="brands-carousel">
        {BRANDS?.map((logo, index) => (
          <img
            key={index}
            src={logo.icon}
            alt={"brand-logo"}
          />
        ))}
      </div>
    </section>
  );
}

export default Brands;
