import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <img className={classes.navbarLogo} src={airbnbLogo} alt="airbnb logo" />
    </div>
  );
}
