import React from "react";
import activityImage from "../images/katie-zaferes.png";
import star from "../images/star.png";

function Card() {
  return (
    <div className="activity">
      <div className="activity__card">
        <img
          src={activityImage}
          alt="Katie Zaferes"
          className="activity__img"
        />
        <span className="activity__status">SOLD OUT</span>
        <p className="activity__rating">
          <img src={star} alt="star" className="activity__rating__star" />
          5.0 <span className="activity__rating__grey">(6) &middot; USA</span>
        </p>
        <p className="activity__name">Life lessons with Katie Zaferes</p>
        <p className="activity__price">
          <span className="activity__price__bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
