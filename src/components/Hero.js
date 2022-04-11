import React from "react";
import photo_grid from "../images/photo-grid.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image__container">
        <img src={photo_grid} alt="" className="hero__image" />
      </div>
      <div className="hero__text__container">
        <h1 className="hero__title">Online Experiences</h1>
        <h4 className="hero__text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h4>
      </div>
    </div>
  );
}

export default Hero;
