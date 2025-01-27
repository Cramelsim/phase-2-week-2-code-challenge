import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onDischarge }) {
  // Function to discharge a bot permanently
  const dischargeBot = (botId) => {
    
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          onDischarge(botId); // Notify the parent component to update state
          console.log(`Bot with ID ${botId} discharged successfully.`);
        } else {
          throw new Error("Failed to delete bot from backend");
        }
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };
  

  return (
    <div className="army-container">
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onDischarge={() => dischargeBot(bot.id)}
          isEnlisted={true}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
