import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemoveFromArmy, onDischarge }) {
  return (
    <section>
      <h1>Your Bot Army</h1>
      <div className="your-bot-army">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRemoveFromArmy={onRemoveFromArmy}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </section>
  );
}

export default YourBotArmy;
