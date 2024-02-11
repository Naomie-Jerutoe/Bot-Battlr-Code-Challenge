import { Switch, Route } from "react-router-dom";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBot, setEnlistedBot] = useState([]);

  const fetchBot = () => {
    fetch("http://localhost:8001/bots")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could Not Fetch Data");
        }
        return res.json();
      })
      .then((data) => setBots(data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchBot();
  }, []);

  const handleEnlistBot = (bot) => {
    const classEnlistedBot = enlistedBot.some(
      (enlistedBot) => enlistedBot.bot_class === bot.bot_class
    );

    if (!classEnlistedBot) {
      alert(`Successfully enlisted ${bot.name} to your army.`);
      setEnlistedBot((prevEnlistedBots) => [...prevEnlistedBots, bot]);
      setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
    } else {
      alert(`You can only enlist one bot from the ${bot.bot_class} class.`);
    }
  };

  const handleRemoveBot = (bot) => {
    alert(`Successfully removed ${bot.name} from your army.`);
    setEnlistedBot((prevEnlistedBots) =>
      prevEnlistedBots.filter((b) => b.id !== bot.id)
    );
    setBots((prevBots) => [...prevBots, bot]);
  };

  const handleDeleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert(`The bot of id ${botId} has been deleted.`);
        fetchBot();
      });
  };

  return (
    <div className="content">
      <NavBar />
      <div className="App">
      <h3>Welcome to Bot Battlr</h3>
      <p>
        The one and only spot in the known universe where you can custom build
        your own Bot Army!
      </p>
      </div>
      <Switch>
        <Route exact path="/">
          <BotCollection
            bots={bots}
            onEnlist={handleEnlistBot}
            onDelete={handleDeleteBot}
          />
        </Route>
        <Route path="/myarmy">
          <YourBotArmy enlistedBots={enlistedBot} onRemove={handleRemoveBot} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
