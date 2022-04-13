import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "../data";

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        title={card.title}
        price={card.price}
        activityImage={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
      />
    );
  });

  return (
    <div className="card">
      <Navbar />
      <Hero />
      <div className="activity">{cards}</div>
    </div>
  );
}

export default App;
