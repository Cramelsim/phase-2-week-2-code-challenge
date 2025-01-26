import React, { useState, useEffect } from "react";
import "./App.css";

import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]); // All bots
  const [army, setArmy] = useState([]); // User's army

  // Fetch bots on initial load
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);
  
  // Add a bot to the army
  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Remove a bot from the army
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Discharge a bot (delete from both frontend and backend)
  const dischargeBot = (bot) => {
    console.log(bot.id); // Correctly log the bot's ID
    fetch(`http://localhost:8001/bots/${bot.id}`, { // Use bot.id instead of botId
      method: "DELETE",
    })
      .then(() => {
        // Correctly remove the bot from both states
        setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
        setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };
  
  
  return (
    <div className="App">
      <h1>Welcome to My Bot Army</h1>
      {/* Bot collection */}
      <BotCollection
        bots={bots}
        onAddToArmy={addToArmy}
        onDischarge={dischargeBot}
        onRemoveFromArmy={removeFromArmy}
        army={army}
      />
      {/* User's army */}
      <YourBotArmy
        army={army}
        onRemoveFromArmy={removeFromArmy}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;
