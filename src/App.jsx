import React, { useState } from 'react'

function App() {
  const [players , setPlayers] = useState([]);
  const [team , setTeam] = useState([]);
  const [msg, setMsg] = useState('');
  const [teammsg, setTeamMsg] = useState('');

  const [name , setName] = useState('');
  function handlePlayerBtn(){
    if(players.indexOf(name) >= 0) return setMsg('duplicate player Not allowed');// Prevent duplicates in players
    setMsg('');
    // setPlayers([...players , {name:name}])
    setPlayers([...players , name])
    setName('');
  }
  
  // Add a player to the team if not already present

  function handleAddBtn(player){
    if(team.indexOf(player) >= 0) return setTeamMsg('duplicate player Not allowed');
    setTeam([...team , player])
  }
// Remove a player from the players list

  function handleDeleteBtn(player){
    setPlayers(players.filter((p) => p !== player));
  }
  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handlePlayerBtn}>Add</button>

      <h1>All players</h1>
      <p>{msg}</p>
      {players.length > 0 ? (
        players.map((player,idx)=>{
          return (
             <li key={idx}>
              {player}
               <button onClick={()=> handleAddBtn(player)}>Add</button>
               <button onClick={()=> handleDeleteBtn(player)}>Delete</button>
             </li>
          )
        })  
      ) : (
        <p>No players added</p>
      )
      }

      <h1>Final Team</h1>
      <p>{teammsg}</p>
      {team.length > 0 ? (
        team.map((player,idx)=>{
          return (
            <>
              <li key={idx}>
                {player}
              </li>
             {/* <button onClick={()=> handleAddBtn(player)}>Add</button>
             <button onClick={()=> handleDeleteBtn(player)}>Delete</button> */}</>
          )
        })  
      ) : (
        <p>No players added in Team</p>
      )}

    </div>
  )
}

export default App