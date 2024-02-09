import React, { useEffect, useState } from "react";
import Logo from "../../components/ui/Logo";
import Button from "./../../components/ui/Button";
import { NAV_BAR } from "../../constants/navbar";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import BurgerMenu from "../ui/BurgerMenu";
import useWindowDimensions from "../../hooks/UseWindowDimention";

function NavBar({ style }) {
  const [activeItem, setActiveItem] = useState(1);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { width } = useWindowDimensions();

  const handleOpenBurgerMenu = () => {
    setOpenBurgerMenu((prev) => !prev);
  };

  const handleActiveItem = (index) => {
    setActiveItem((prev) => index);
  };

  useEffect(() => {
    if (width >= 991) {
      setOpenBurgerMenu(true);
    }
  }, [width]);

  return (
    <nav className="nav-container">
      <Logo />
      <ul className={openBurgerMenu ? " nav-list" : "nav-list__hide nav-list"}>
        <li></li>
        {NAV_BAR.map((item) => (
          <>
            <li key={item.id} className="list-item">
              <Link
                onClick={() => {
                  handleActiveItem(item.id);
                  handleOpenBurgerMenu();
                }}
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

      <Button className="nav-button" text="Get a Quote" />
      <BurgerMenu
        openBurgerMenu={openBurgerMenu}
        handleOpenBurgerMenu={handleOpenBurgerMenu}
      />
    </nav>
  );
}

export default NavBar;
