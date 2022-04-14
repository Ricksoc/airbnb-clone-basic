import React from "react";
import { act } from "react-dom/test-utils";

function Card(props) {
  let activityText;

  if (props.openSpots === 0) {
    activityText = "SOLD OUT";
  } else {
    activityText = "Online";
  }

  return (
    <div className="activity__card">
      <img
        src={`./images/${props.activityImage}`}
        alt="Katie Zaferes"
        className="activity__img"
      />
      {props.location === "Online" && (
        <span className="activity__status">{activityText}</span>
      )}
      <p className="activity__rating">
        <img
          src="./images/star.png"
          alt="star"
          className="activity__rating__star"
        />
        {props.rating}
        <span className="activity__rating__grey">
          &nbsp;({props.reviewCount}) &middot; {props.location}
        </span>
      </p>
      <p className="activity__name">{props.title}</p>
      <p className="activity__price">
        <span className="activity__price__bold">From ${props.price}</span> /
        person
      </p>
    </div>
  );
}

export default Card;
