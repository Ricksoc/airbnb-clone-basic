import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

import activityImage from "../images/katie-zaferes.png";

function App() {
  return (
    <div className="card">
      <Navbar />
      <Hero />
      <div className="activity">
        <Card
          activityImage={activityImage}
          rating="5.0"
          reviewCount={6}
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </div>
  );
}

export default App;
