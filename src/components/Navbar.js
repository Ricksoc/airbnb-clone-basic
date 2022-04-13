import React from "react";
// import logo from "../images/4373300_airbnb_logo_logos_icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav__title">
        <img src="./images/4373300_airbnb_logo_logos_icon.png" alt="" className="nav__logo" />
        <span className="nav__sitename">airbnb</span>
      </div>
    </div>
  );
}

export default Navbar;
