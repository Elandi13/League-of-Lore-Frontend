import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router"
import Header from "./Header"
import Filter from "./Filter"
import CardContainer from "./CardContainer"
import ChampionDetailPage from "./ChampionDetailPage"




function App() {
  const[champions, setChampions] = useState([])
  const[search, setSearch] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:3000/champions`)
    .then(response => response.json())
    .then((championsArray) => setChampions(championsArray))
  },[])

  function handleSearchChange(event){
    // console.log(event.target.value)
    setSearch(event.target.value)
  }
  
  const filteredChamps = champions.filter((champion) => {
    return champion.name.toLowerCase().includes(search.toLowerCase())
  })




  return (
    <div class= "app-container">
      <Switch> 
        <Route exact path="/"> 
        <Header/>
        <Filter search={search} onSearch={handleSearchChange} filteredChamps={filteredChamps}/>
        <CardContainer champs={champions} filteredChamps={filteredChamps}/>
        </Route>

        <Route path="/champions/:id">
          <Header/>
          <ChampionDetailPage/>
        </Route>
      </Switch>
      
  
    </div>
    

  );
}

export default App;
