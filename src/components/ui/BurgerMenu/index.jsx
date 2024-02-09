import React from "react";

function BurgerMenu({ handleOpenBurgerMenu, openBurgerMenu }) {
  return (
    <label className="bar" htmlFor="check">
      <input onClick={handleOpenBurgerMenu} type="checkbox" id="check" />
      <span className={openBurgerMenu ? "top top-burger__item" : "top"}></span>
      <span
        className={openBurgerMenu ? "middle middle-burger__item" : "middle"}
      ></span>
      <span
        className={openBurgerMenu ? "bottom bottom-burger__item" : "bottom"}
      ></span>
    </label>
  );
}

export default BurgerMenu;
