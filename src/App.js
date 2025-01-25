    import React, { useState, useEffect } from "react";
    import './App.css';
    import BotCard from './components/BotCard';
    import BotCollection from './components/BotCollection';
    import YourBotArmy from './components/YourBotArmy';

    function App() {
    // State to hold the list of all bots and the user's army
    const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [notification, setNotification] = useState("");

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
          setNotification("This bot is already in your army.");
        } else {
          setArmy([...army, bot]);
          setNotification(`You have enlisted ${bot.name}!`);
        }
      };
    // Function to remove a bot from the army
    const removeFromArmy = (bot) => {
        setArmy(army.filter((b) => b.id !== bot.id));
    };

    // Function to discharge a bot (delete from both frontend and backend)
    const dischargeBot = (botId) => {
        fetch(`http://localhost:8001/bots/${botId}`, {
          method: "DELETE",
        })
          .then(() => {
            setArmy(army.filter((b) => b.id !== botId));
            setBots(bots.filter((b) => b.id !== botId));
          });
      };
    return (
        <div className="App">
        <h1>Welcome to My Bot Army</h1>
        {notification && <div className="notification">{notification}</div>}
        {/* Display the BotCollection and pass the relevant props */}
        <BotCollection 
            bots={bots} 
            onAddToArmy={addToArmy} 
        />

        {/* Display the user's army */}
        <YourBotArmy 
            army={army} 
            onRemoveFromArmy={removeFromArmy} 
            onDischarge={dischargeBot} 
        />
        
        {/* Example bot card */}
        {bots.length > 0 && (
            <BotCard 
            bot={bots[0]} // Pass the first bot in the list as an example
            onAddToArmy={addToArmy} 
            onRemoveFromArmy={removeFromArmy} 
            onDischarge={dischargeBot} 
            />
        )}
        </div>
    );
    }

    export default App;
