import React from "react";
import heroImage from "../images/photo-grid.png";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <img className={classes.heroImage} src={heroImage} alt="hero" />
      <h1 className={classes.heroTitle}>Online Experiences</h1>
      <p className={classes.heroText}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
