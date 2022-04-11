import React from "react";
import logo from "../images/4373300_airbnb_logo_logos_icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <img src={logo} alt="" className="logo" />
        <span className="sitename">airbnb</span>
      </div>
    </div>
  );
}

export default Navbar;
