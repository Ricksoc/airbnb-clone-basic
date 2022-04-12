import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

function App() {
  return (
    <div className="card">
      <Navbar />
      <Hero />
      <div className="activity">
        <Card />
      </div>
    </div>
  );
}

export default App;
