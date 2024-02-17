import React from "react";

function BurgerMenu({ handleOpenBurgerMenu, openBurgerMenu, blueNavStyle }) {
  return (
    <label className="bar" htmlFor="check">
      <input onClick={handleOpenBurgerMenu} type="checkbox" id="check" />
      <span
        className={
          openBurgerMenu
            ? "top top-burger__item"
            : blueNavStyle
            ? "top__blue top"
            : "top"
        }
      ></span>
      <span
        className={
          openBurgerMenu
            ? "middle middle-burger__item"
            : blueNavStyle
            ? "top__blue middle"
            : "middle"
        }
      ></span>
      <span
        className={
          openBurgerMenu
            ? "bottom bottom-burger__item"
            : blueNavStyle
            ? "top__blue bottom"
            : "bottom"
        }
      ></span>
    </label>
  );
}

export default BurgerMenu;
