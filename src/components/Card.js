import React from "react";
import classes from "./Card.module.css";
import star from "../images2/star.png";

export default function Card(props) {
  const badge =
    // if there are no spots
    props.openSpots === 0 ? (
      // show the 'sold out' badge
      <div className={classes.cardBadge}>SOLD OUT</div>
    ) : (
      // otherwise, show the 'online' badge when location is online
      props.location === "Online" && (
        <div className={classes.cardBadge}>ONLINE</div>
      )
    );
  return (
    <div className={classes.card}>
      {props.openSpots === 0 ? (
        <div className={classes.cardBadge}>SOLD OUT</div>
      ) : props.location === "Online" ? (
        <div className={classes.cardBadge}>ONLINE</div>
      ) : null}
      {badge}
      <img
        className={classes.coverImg}
        src={`../images/${props.img}?raw=true`}
        alt="experience"
      />
      <br />
      <div>
        <img className={classes.cardStar} src={star} alt="star" />
        <span className={classes.cardRating}> {props.rating.toFixed(1)}</span>
        <span className={classes.cardReviewCount}>
          {" "}
          ({props.reviewCount}) &#183;
        </span>
        <span className={classes.cardLocation}> {props.location}</span>
      </div>
      <p className={classes.cardTitle}>{props.title}</p>
      <p className={classes.cardPrice}>
        <strong>from ${props.price}</strong> / person
      </p>
    </div>
  );
}
