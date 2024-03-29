import React from "react";
import "./BotCollection.css";

function YourBotArmy({ enlistedBots, onRemove }) {
  return (
    <div>
        <h3>My Bot Army</h3>
      <div className="main">
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="container">
            <div className="wrapper">
              <div className="bot-image">
                <img src={bot.avatar_url} alt={bot.name} />
              </div>
              <h3>Name: {bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Created at: {bot.created_at}</p>
              <p>Updated at: {bot.updated_at}</p>
            </div>
            <div class="button-wrapper">
              <button class="btn outline" onClick={() => onRemove(bot)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
