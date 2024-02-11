import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/twp/home" className="main-logo">
      twp
    </Link>
  );
}

export default Logo;
