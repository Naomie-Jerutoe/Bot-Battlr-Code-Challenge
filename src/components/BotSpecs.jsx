import React from "react";

function BotSpecs({ bot, onEnlist, onGoBack }) {
  return (
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
        <p>Catch Phrase: {bot.catchphrase}</p>
        <p>Created at: {bot.created_at}</p>
        <p>Updated at: {bot.updated_at}</p>
      </div>
      <div class="button-wrapper">
        <button class="btn outline" title="Enlist the bot" onClick={() => onEnlist(bot)}>
          ENLIST
        </button>
        <button
          class="btn outline"
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
