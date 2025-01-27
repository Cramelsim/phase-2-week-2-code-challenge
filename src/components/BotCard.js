import React from "react";


function BotCard({ bot, onAddToArmy, onRemoveFromArmy, onDischarge, isEnlisted }) {
    console.log("Bot object in BotCard:", bot);  
  
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
            <button onClick={() => onAddToArmy(bot)} className="enlist-btn">Enlist</button>
          )}
          
          {/* Discharge button */}
          <button onClick={() => onDischarge(bot)}>X</button>

          {/* Remove from Army button */}
          {isEnlisted && (
            <button onClick={() => onRemoveFromArmy(bot)} className="remove-btn">Remove</button>
          )}
          {/* Message if bot is already enlisted */}
          {isEnlisted && <p className="enlisted-message">This bot is already enlisted!</p>}
        </div>
      </div>
    );
  }
export default BotCard;  