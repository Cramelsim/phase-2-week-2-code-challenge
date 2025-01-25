import React from "react";

function BotCard({ bot, onAddToArmy, onRemoveFromArmy, onDischarge }) {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p><strong>Class:</strong> {bot_class}</p>
      <p><strong>Health:</strong> {health}</p>
      <p><strong>Damage:</strong> {damage}</p>
      <p><strong>Armor:</strong> {armor}</p>
      <p><strong>Catchphrase:</strong> {catchphrase}</p>
      <div className="actions">
        {onAddToArmy && <button onClick={() => onAddToArmy(bot)}>Enlist</button>}
        {onRemoveFromArmy && <button onClick={() => onRemoveFromArmy(bot)}>Release</button>}
        <button onClick={() => onDischarge(bot.id)} className="discharge">Discharge</button>
      </div>
    </div>
  );
}

export default BotCard;
