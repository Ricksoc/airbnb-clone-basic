import React from "react";

function Card(props) {
  return (
    <div className="activity__card">
      <img
        src={`./images/${props.activityImage}`}
        alt="Katie Zaferes"
        className="activity__img"
      />
      <span className="activity__status">
        {props.openSpots === 0 ? "SOLD OUT" : props.location}
      </span>
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
