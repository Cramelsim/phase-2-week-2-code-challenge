import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddToArmy }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card-container">
            <BotCard bot={bot} onAddToArmy={onAddToArmy} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
