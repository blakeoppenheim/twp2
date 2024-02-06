import React from "react";
import Button from "./../../components/ui/Button";
import Icon from "./../../assets/icons/aliminumBottle.svg";
import waterIcon from "./../../assets/icons/water.svg";
import recycleIcon from "./../../assets/icons/recycle.svg";
import handIcon from "./../../assets/icons/hand.svg";
import aluminumIconBlue from "./../../assets/icons/aliminum.svg";
import aluminumIconWhite from "./../../assets/icons/alimnumWhite.svg";
import plasticIconWhite from "./../../assets/icons/plastic.svg";
import plasticIconBlue from "./../../assets/icons/bottleBlue.svg";
import glassIconBlue from "./../../assets/icons/glass.svg";
import glassIconWhite from "./../../assets/icons/glassWhite.svg";
function Products() {
  return (
    <section className="products-container">
      <article className="products-container__header">
        <div className="product-image__container">
          <img src={Icon} className="bottle-image" alt="product-image" />
          <p className="image-description">
            High-quality aluminum combines strength, corrosion resistance, and
            light weight, making it ideal for maintaining temperature
          </p>
        </div>
        <div className="product-details__container">
          <h5 className="product-material">ALUMINUM</h5>
          <h1 className="product-title">
            ECO-SMART <br /> <span className="title">ALUMINUM</span>
            <span className="point">.</span>
          </h1>
          <p className="product-detail">
            Lightweight and durable, our aluminum bottle is ideal for
            maintaining your drink's temperature, perfect for <br />
            <span className="special-word">eco-friendly</span>
            on-the-go hydration.
          </p>
          <div className="buttons-action__container">
            <Button
              className="active"
              icon={aluminumIconBlue}
              text="Aluminum"
            />
            <Button icon={plasticIconWhite} text="Plastic" />
            <Button icon={glassIconWhite} text="Glass" />
          </div>
        </div>
      </article>
      <article className="products-container__footer">
        <ul className="list">
          <li>
            <img
              src={handIcon}
              alt="sustainable-icon"
              className="sustainable-icon"
            />
          </li>
          <li>sustainable</li>
        </ul>
        <ul className="list">
          <li>
            <img src={waterIcon} alt="water-icon" className="water-icon" />
          </li>
          <li>lightweight</li>
        </ul>
        <ul className="list">
          <li>
            <img
              src={recycleIcon}
              alt="water-icon"
              className="recyclable-icon"
            />
          </li>
          <li>always recyclable</li>
        </ul>
      </article>
    </section>
  );
}

export default Products;
