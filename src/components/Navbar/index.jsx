import React, { useState } from "react";
import Logo from "../../components/ui/Logo";
import Button from "./../../components/ui/Button";
import { NAV_BAR } from "../../constants/navbar";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import BurgerMenu from "../ui/BurgerMenu";

function NavBar({ style }) {
  const [activeItem, setActiveItem] = useState(1);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const handleOpenBurgerMenu = () => {
    setOpenBurgerMenu((prev) => !prev);
  };

  const handleActiveItem = (index) => {
    setActiveItem((prev) => index);
  };

  console.log("prev|,", openBurgerMenu);

  return (
    <nav className="nav-container">
      <Logo />(
      <ul className={openBurgerMenu ? " nav-list" : "nav-list__hide nav-list"}>
        <li onClick={handleOpenBurgerMenu}>*</li>
        {NAV_BAR.map((item) => (
          <>
            <li key={item.id} className="list-item">
              <Link
                onClick={() => handleActiveItem(item.id)}
                className={
                  item.id === activeItem ? "link link-active " : "link"
                }
                to={item.path}
              >
                {item.value}
              </Link>
            </li>
          </>
        ))}
      </ul>
      )
      <Button className="nav-button" text="Get a Quote" />
      <BurgerMenu showMenu={handleOpenBurgerMenu} />
    </nav>
  );
}

export default NavBar;
