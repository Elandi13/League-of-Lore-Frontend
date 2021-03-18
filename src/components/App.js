import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router"
import Header from "./Header"
import Filter from "./Filter"
import CardContainer from "./CardContainer"
import ChampionDetailPage from "./ChampionDetailPage"
import RegionCardContainer from "./RegionCardContainer"
import RegionDetailPage from "./RegionDetailPage"
import Login from "./Login"




function App() {
  const[champions, setChampions] = useState([])
  const[regions, setRegions] = useState([])
  const[search, setSearch] = useState("")
  const[currentUser, setCurrentUser] =useState(null)


  useEffect(()=>{
    const token = null
    if(token){
      fetch(`http://localhost:3000/me`)
      .then((response) => response.json())
      .then(data => {
        setCurrentUser(data)
      })
    }
  },[])

  useEffect(()=>{
    fetch(`http://localhost:3000/champions`)
    .then(response => response.json())
    .then((championsArray) => setChampions(championsArray))
  },[])


  useEffect(()=> {
    fetch(`http://localhost:3000/regions`)
    .then(response => response.json())
    .then((regionsArray)=> setRegions(regionsArray))
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
        <Header  
        currentUser ={currentUser} 
        setCurrentUser={setCurrentUser}
        />

        <Filter 
        search={search} 
        onSearch={handleSearchChange} 
        filteredChamps={filteredChamps}
        />

        <CardContainer 
        champs={champions} 
        filteredChamps={filteredChamps}
        />
        </Route>

        <Route path="/champions/:id">
          <Header
          currentUser ={currentUser} 
          setCurrentUser={setCurrentUser}
          />
          <ChampionDetailPage/>
        </Route>

        <Route exact path="/regions"> 
          <Header
          currentUser ={currentUser} 
          setCurrentUser={setCurrentUser}
          />

          <RegionCardContainer 
          regions={regions}
          />
        </Route>

        <Route path="/regions/:id">
          <Header
          currentUser ={currentUser} 
          setCurrentUser={setCurrentUser}
          />
          <RegionDetailPage/>
        </Route>

        <Route path = "/login"> 
          <Login setCurrentUser ={setCurrentUser}/>
        </Route>

      </Switch>
      
  
    </div>
    

  );
}

export default App;
