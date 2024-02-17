import React, { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../../components/ui/Logo";
import Button from "./../../components/ui/Button";
import { NAV_BAR } from "../../constants/navbar";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "../ui/BurgerMenu";
import useWindowDimensions from "../../hooks/UseWindowDimention";
import { changeNavStyle } from "../../utils/ChangeNavStyle";

function NavBar() {
  const [activeItem, setActiveItem] = useState(1);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();
  const blueNavStyle =
    changeNavStyle(activeItem) || pathname == "/twp/contact-us";

  const handleOpenBurgerMenu = () => {
    if (width < 991) setOpenBurgerMenu((prev) => !prev);
  };

  const handleActiveItem = (index) => {
    setActiveItem((prev) => index);
  };

  const handleScrollToElement = (ref) => {
    if (ref.path === "/twp/contact-us") return;
    if (ref.ref)
      document.getElementById(ref.ref).scrollIntoView({
        behavior: "smooth",
      });
  };

  useEffect(() => {
    if (width >= 991) {
      setOpenBurgerMenu(true);
    }
    if (width <= 991) {
      setOpenBurgerMenu(false);
    }
  }, [width]);

  useEffect(() => {
    if (width < 991) {
      document.body.style.overflow = "hidden";
    }
  }, [openBurgerMenu, width]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      for (const item of NAV_BAR) {
        const element = document.getElementById(item.ref);

        if (element) {
          const elementTop = element.offsetTop - 200;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveItem(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav-container">
      <Logo blueNavStyle={blueNavStyle} />
      <ul
        className={
          !openBurgerMenu
            ? "nav-list__hide nav-list"
            : blueNavStyle
            ? "nav-list nav-list__blue"
            : " nav-list"
        }
      >
        <li></li>
        {NAV_BAR.map((item) => (
          <>
            <li key={item.id} className="list-item">
              <Link
                onClick={() => {
                  handleActiveItem(item.id);
                  handleOpenBurgerMenu();
                  handleScrollToElement(item);
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

      <Button
        link={"/twp/contact-us"}
        className={blueNavStyle ? "nav-button nav-blue__button" : "nav-button"}
        text="Get a Quote"
      />
      <BurgerMenu
        blueNavStyle={blueNavStyle}
        openBurgerMenu={openBurgerMenu}
        handleOpenBurgerMenu={handleOpenBurgerMenu}
      />
    </nav>
  );
}

export default NavBar;
