import React from "react";
import photo_grid from "../images/photo-grid.png";

function Hero() {
  return (
    <div className="hero">
      <img src={photo_grid} alt="" className="hero__image" />
      <div className="hero__text">
        <h1 className="hero__title">Online Experiences</h1>
        <p className="hero__content">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
