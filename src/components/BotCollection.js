import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ onAddToArmy, onDischarge, army, onRemoveFromArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bots from the backend
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched bots:', data);
        setBots(data);
      })
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  return (
    <section>
      {/* Enlisted Bots Section */}
      <h1>Your Bot Army</h1>
      <div className="bot-army">
        {army.length === 0 ? (
          <p>No bots enlisted in your army yet!</p>
        ) : (
          army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onDischarge={onDischarge}
              onRemoveFromArmy={onRemoveFromArmy}
              isEnlisted={true} // Marks the bot as part of the army
            />
          ))
        )}
      </div>

      {/* All Bots Section */}
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.length === 0 ? (
          <p>Loading bots...</p>
        ) : (
          bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onAddToArmy={onAddToArmy}
              onDischarge={onDischarge}
              onRemoveFromArmy={onRemoveFromArmy}
              isEnlisted={Array.isArray(army) && army.some((b) => b.id === bot.id)}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default BotCollection;
