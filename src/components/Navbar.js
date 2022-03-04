import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <img className={classes.navbarLogo} src={airbnbLogo} alt="airbnb logo" />
    </nav>
  );
}
