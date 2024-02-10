import React from "react";
import waterIcon from "./../../assets/icons/water.svg";
import recycleIcon from "./../../assets/icons/recycle.svg";
import handIcon from "./../../assets/icons/hand.svg";

function Benefits() {
  return (
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
          <img src={recycleIcon} alt="water-icon" className="recyclable-icon" />
        </li>
        <li>always recyclable</li>
      </ul>
    </article>
  );
}

export default Benefits;
