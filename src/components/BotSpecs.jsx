import React from "react";

function BotSpecs({ bot, onEnlist, onGoBack }) {
  return (
    <div key={bot.id} className="container">
      <div className="bot-image">
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="bot-details">
        <h3>Name: {bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p style={{ fontSize: "9px" }}>Catch Phrase: {bot.catchphrase}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Created at: {bot.created_at}</p>
        <p>Updated at: {bot.updated_at}</p>
      </div>
      <div className="button-wrapper">
        <button
          className="btn outline"
          title="Enlist the bot"
          onClick={() => onEnlist(bot)}
        >
          ENLIST
        </button>
        <button
          className="btn outline"
          title="Go Back to List"
          onClick={() => onGoBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default BotSpecs;
