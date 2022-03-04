import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import classes from "./components/Card.module.css";
import data from "./data.js";

export default function App() {
  const cards = data.map((el) => {
    return (
      <Card
        key={el.id}
        title={el.title}
        price={el.price}
        img={el.coverImg}
        rating={el.stats.rating}
        reviewCount={el.stats.reviewCount}
        location={el.location}
        openSpots={el.openSpots}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className={classes.cards}>{cards}</div>
    </div>
  );
}
