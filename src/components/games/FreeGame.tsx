import { cardsData } from "@/lib/data";
import React from "react";
import FreeGameCard from "./FreeGameCard";

function FreeGame() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {cardsData.map((card, index) => (
        <FreeGameCard key={index} card={card} />
      ))}
    </div>
  );
}

export default FreeGame;
