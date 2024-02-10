import './BotCollection.css'

function BotCollection({bots, onEnlist, onDelete}) {
  return (
    <div className='main'>
      {bots.map(bot=>(
        <div key={bot.id} className="container">
          <div className='wrapper'>
            <div className='bot-image'>
            <img src={bot.avatar_url} alt={bot.name} />
            </div>
          <h3>Name: {bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          </div>
          <div class="button-wrapper"> 
              <button class="btn outline" onClick={() => onEnlist(bot)}>ENLIST</button>
              <button class="btn fill" title='Delete Bot' onClick={()=>onDelete(bot.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BotCollection