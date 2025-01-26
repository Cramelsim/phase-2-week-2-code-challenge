// BotCard.js
import React, { useState } from "react";

function BotCard({ bot, onAddToArmy, onRemoveFromArmy, onDischarge, isEnlisted }) {
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
        {/* Enlist button */}
        {!isEnlisted && (
          <button onClick={() => onAddToArmy(bot)}>Enlist</button>
        )}
        {/* Discharge button */}
        {isEnlisted && (
          <button
            onClick={() => onDischarge(bot.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            x
          </button>
        )}
        {/* Message if bot is already enlisted */}
        {isEnlisted && <p style={{ color: "green" }}>This bot is already enlisted!</p>}
      </div>
    </div>
  );
}

export default BotCard;
