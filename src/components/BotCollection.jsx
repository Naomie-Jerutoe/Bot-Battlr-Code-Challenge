import { useState } from "react";
import "./BotCollection.css";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotCollection({ bots, onEnlist, onDelete }) {
  const [clickedBot, setClickedBot] = useState(null);
  const [sortBots, setSortBots] = useState("All");
  const [botClass, setBotClass] = useState("All");

  const handleBotClick = (bot) => {
    setClickedBot(bot);
  };

  const handleGoBack = () => {
    setClickedBot(null);
  };

  const handleSortChange = (option) => {
    setSortBots(option);
  };

  const handleClassChange = (option) => {
    setBotClass(option);
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

  const botsFiltered = sortedBots().filter((bot) => {
    if (botClass === "All") {
      return true;
    } else {
      return bot.bot_class.toLowerCase() === botClass.toLowerCase();
    }
  });

  return (
    <div>
      <div className="sort">
        <SortBar
          onSortChange={handleSortChange}
          onClassChange={handleClassChange}
        />
      </div>
      <div className="main">
        {clickedBot ? (
          <BotSpecs
            bot={clickedBot}
            onEnlist={onEnlist}
            onGoBack={handleGoBack}
          />
        ) : (
          botsFiltered.map((bot) => (
            <div
              key={bot.id}
              className="container"
              title="Click for more details"
              onClick={() => handleBotClick(bot)}
            >
              <div className="bot-image">
                <img src={bot.avatar_url} alt={bot.name} />
              </div>
              <div className="bot-details">
                <h3>Name: {bot.name}</h3>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <p style={{ fontWeight: "600" }}>Class: {bot.bot_class}</p>
              </div>
              <div className="button-wrapper">
                <button
                  className="btn fill"
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
