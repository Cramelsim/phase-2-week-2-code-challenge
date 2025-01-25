import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ onAddToArmy, onDischarge }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <section>
      <h1>Bot Collection</h1>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onAddToArmy={onAddToArmy}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </section>
  );
}

export default BotCollection;
