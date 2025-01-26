import React, { useState } from "react";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemoveFromArmy, onDischarge }) {
  const [localArmy, setLocalArmy] = useState([]);

  // Function to discharge a bot permanently (delete from backend and state)
  const dischargeBot = (botId) => {
    console.log(`Discharging bot with ID: ${botId}`);
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Update local and global states after successful discharge
          setLocalArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
          onDischarge(botId); // Call the parent function to update global state
          console.log(`Bot with ID ${botId} discharged successfully.`);
        } else {
          throw new Error("Failed to delete bot from backend");
        }
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  return (
    <div>
      {/* Section for enlisted bots */}
      <h1>Welcome to My Army</h1>
      <div className="army-container">
        {army.length === 0 ? (
          <p>No bots enlisted in your army!</p>
        ) : (
          army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onRemoveFromArmy={onRemoveFromArmy}
              onDischarge={dischargeBot}
              isEnlisted={true}
            />
          ))
        )}
      </div>

      {/* Section for all available bots */}
      <h2>All Bots</h2>
      <BotCollection
        onAddToArmy={(bot) => setLocalArmy([...localArmy, bot])}
        onDischarge={dischargeBot}
        onRemoveFromArmy={onRemoveFromArmy}
        army={army}
      />
    </div>
  );
}

export default YourBotArmy;
