import React, { useState, useEffect } from "react";
import './App.css';
import BotCard from './components/BotCard';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  // State to hold the list of all bots and the user's army
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [message, setMessage] = useState(""); // For displaying notifications

  // Fetch the bots from the server on initial load
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Function to add a bot to the army
  const addToArmy = (bot) => {
    // Check if bot is already in the army
    if (army.some((b) => b.id === bot.id)) {
      setMessage(`${bot.name} is already enlisted!`);
      return;
    }

    // Add bot to army
    setArmy([...army, bot]);
    setMessage(`${bot.name} has been added to your army!`);
  };

  // Function to remove a bot from the army
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
    setMessage(`${bot.name} has been removed from your army!`);
  };

  // Function to discharge a bot (delete from both frontend and backend)
  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== botId));
        setBots(bots.filter((b) => b.id !== botId));
        setMessage("Bot has been discharged.");
      });
  };

  return (
    <div className="App">
      <h1>Welcome to My Bot Army</h1>

      {/* Display message */}
      {message && <div className="message">{message}</div>}

      {/* Bot Collection - Display all available bots */}
      <BotCollection bots={bots} onAddToArmy={addToArmy} />

      {/* Your Bot Army - Display the enlisted bots */}
      <YourBotArmy
        army={army}
        onRemoveFromArmy={removeFromArmy}
        onDischarge={dischargeBot}
      />
    </div>
  );
}

export default App;
