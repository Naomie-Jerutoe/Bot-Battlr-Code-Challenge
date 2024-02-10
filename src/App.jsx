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
        if(!res.ok){
          throw new Error('Could Not Fetch Data')
        }
        return res.json()})
      .then((data) => setBots(data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchBot();
  },[]);

  const handleEnlistBot = (bot) => {
    if (!enlistedBot.some((enlistedBot) => enlistedBot.id === bot.id)) {
      alert(`Successfully enlisted ${bot.name} to your army.`);
      setEnlistedBot((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    } else {
      alert(`${bot.name} has already been enlisted to your army. Please choose another bot.`);
    }
  };

  const handleRemoveBot = (bot) => {
    alert (`Successfully removed ${bot.name} from your army.`)
    setEnlistedBot((prevEnlistedBots) =>
    prevEnlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id)
  );
  }

  const handleDeleteBot = (botId) =>{
    fetch(`http://localhost:8001/bots/${botId}`,{
      method: 'DELETE',
    })
    .then((res) => res.json())
      .then(() => {
        alert(`The bot of id ${botId} has been deleted.`);
        fetchBot();
      });
  }

  return (
    <div className="content">
      <NavBar />
      <h3 className="App">
        Welcome to Bot Battlr, the one and only spot in the known
        universe where you can custom build your own Bot Army!
      </h3>
      <Switch>
        <Route exact path="/">
          <BotCollection bots={bots} onEnlist={handleEnlistBot} onDelete={handleDeleteBot} />
        </Route>
        <Route path="/myarmy">
          <YourBotArmy enlistedBots={enlistedBot} onRemove={handleRemoveBot} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
