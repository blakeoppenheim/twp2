import React from "react";

function BurgerMenu({ showMenu }) {
  return (
    <label className="bar" htmlFor="check">
      <input onClick={showMenu} type="checkbox" id="check" />
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </label>
  );
}

export default BurgerMenu;
