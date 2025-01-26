// YourBotArmy.js
import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemoveFromArmy, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-container">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRemoveFromArmy={onRemoveFromArmy}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
