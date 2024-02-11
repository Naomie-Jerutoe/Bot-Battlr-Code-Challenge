import { useState } from "react";
import "./BotCollection.css";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotCollection({ bots, onEnlist, onDelete }) {
  const [clickedBot, setClickedBot] = useState(null);
  const [sortBots, setSortBots] = useState("All");

  const handleBotClick = (bot) => {
    setClickedBot(bot);
  };

  const handleGoBack = () => {
    setClickedBot(null);
  };

  const handleSortChange = (option) => {
    setSortBots(option);
  };

  const sortedBots = () => {
    switch (sortBots) {
      case "health":
        return [...bots].sort((a, b) => b.health - a.health);
      case "damage":
        return [...bots].sort((a, b) => a.damage - b.damage);
      case "armor":
        return [...bots].sort((a, b) => b.armor - a.armor);
      default:
        return bots;
    }
  };

  return (
    <div>
      <div className="sort">
        <SortBar onSortChange={handleSortChange} />
      </div>
      <div className="main">
        {clickedBot ? (
          <BotSpecs
            bot={clickedBot}
            onEnlist={onEnlist}
            onGoBack={handleGoBack}
          />
        ) : (
          sortedBots().map((bot) => (
            <div key={bot.id} className="container">
              <div
                className="wrapper"
                title="Click to see more"
                onClick={() => handleBotClick(bot)}
              >
                <div className="bot-image">
                  <img src={bot.avatar_url} alt={bot.name} />
                </div>
                <h3>Name: {bot.name}</h3>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
              </div>
              <div class="button-wrapper">
                <button
                  class="btn fill"
                  title="Delete Bot"
                  onClick={() => onDelete(bot.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BotCollection;
