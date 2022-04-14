import React from "react";
import { act } from "react-dom/test-utils";

function Card(props) {
  console.log(props);

  let activityText;

  if (props.openSpots === 0) {
    activityText = "SOLD OUT";
  } else if (props.location === "Online") {
    activityText = "ONLINE";
  }

  return (
    <div className="activity__card">
      <img
        src={`./images/${props.coverImg}`}
        alt="Katie Zaferes"
        className="activity__img"
      />
      {activityText && <span className="activity__status">{activityText}</span>}
      <p className="activity__rating">
        <img
          src="./images/star.png"
          alt="star"
          className="activity__rating__star"
        />
        {props.stats.rating}
        <span className="activity__rating__grey">
          &nbsp;({props.stats.reviewCount}) &middot; {props.location}
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
