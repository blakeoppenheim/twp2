import React, { useState } from "react";
import Logo from "../../components/ui/Logo";
import Button from "./../../components/ui/Button";
import { NAV_BAR } from "../../constants/navbar";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";

function NavBar({ style }) {
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index) => {
    setActiveItem((prev) => index);
  };

  return (
    <nav className="nav-container">
      <Logo />
      <ul className="nav-list">
        {NAV_BAR.map((item) => (
          <li key={item.id} className="list-item">
            <Link
              onClick={() => handleActiveItem(item.id)}
              className={item.id === activeItem ? "link link-active " : "link"}
              to={item.path}
            >
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
      <Button className="nav-button" text="Get a Quote" />
    </nav>
  );
}

export default NavBar;
