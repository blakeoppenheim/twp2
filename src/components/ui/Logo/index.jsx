import React from "react";
import { Link } from "react-router-dom";
import BleuLogo from "./../../../assets/icons/TWP-Blue.svg";
import WhiteLogo from "./../../../assets/icons/twp_white.svg";
function Logo({ blueNavStyle }) {
  return (
    <Link to="/twp/home">
      <>
        {!blueNavStyle ? (
          <img className="main-logo" src={WhiteLogo} alt="main-logo" />
        ) : (
          <img className="main-logo" src={BleuLogo} alt="main-logo" />
        )}
      </>
    </Link>
  );
}

export default Logo;
