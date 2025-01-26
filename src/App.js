import React, { useState, useEffect } from "react";
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [message, setMessage] = useState(""); // For notifications

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (army.some((b) => b.id === bot.id)) {
      setMessage(`${bot.name} is already enlisted!`);
      return;
    }
    setArmy([...army, bot]);
    setMessage(`${bot.name} has been added to your army!`);
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
    setMessage(`${bot.name} has been removed from your army!`);
  };

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
      <h1>Welcome to My Bot Army</h1>
      {message && <div className="message">{message}</div>}

      <BotCollection bots={bots} onAddToArmy={addToArmy} />
      <YourBotArmy
        army={army}
        onRemoveFromArmy={removeFromArmy}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;
