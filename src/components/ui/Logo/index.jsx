import React from "react";
import { Link } from "react-router-dom";

function Logo({ blueNavStyle }) {
  return (
    <Link to="/twp/home" className={blueNavStyle ? "main-logo main-logo__blue" : "main-logo"}>
      twp
    </Link>
  );
}

export default Logo;
