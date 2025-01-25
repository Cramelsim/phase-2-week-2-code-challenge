import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemoveFromArmy, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>Your army is empty. Start enlisting bots!</p>
      ) : (
        <div className="bot-list">
          {army.map((bot) => (
            <div key={bot.id} className="bot-list-item">
              <BotCard
                bot={bot}
                onRemoveFromArmy={onRemoveFromArmy}
                onDischarge={onDischarge}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
