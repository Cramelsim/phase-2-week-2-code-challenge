// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Add bot to army
  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Remove bot from army
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Discharge bot
  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== botId));
        setBots(bots.filter((b) => b.id !== botId));
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  return (
    <div className="App">
      <h1>Welcome to Bot Army Manager</h1>
      <YourBotArmy
        army={army}
        onRemoveFromArmy={removeFromArmy}
        onDischarge={dischargeBot}
      />
      <BotCollection bots={bots} onAddToArmy={addToArmy} />
    </div>
  );
}

export default App;
