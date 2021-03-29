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
  const[stories, setStories] = useState([])
  const[search, setSearch] = useState("")
  const[currentUser, setCurrentUser] =useState(null)


  


  useEffect(()=>{
    const token = null
    if(token){
      fetch(`http://localhost:3000/`)
      .then((response) => response.json())
      .then(data => {
        setCurrentUser(data)
        // console.log(data)
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

  // console.log(regions)

  useEffect(()=>{
    fetch(`http://localhost:3000/user_stories`)
    .then(response => response.json())
    .then((storyData) => setStories(storyData))
    
  },[])




  function handleSearchChange(event){
    setSearch(event.target.value)
  }




  const filteredChamps = champions.filter((champion) => {
    return champion.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className= "app-container">
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
          <ChampionDetailPage
          stories={stories}
          setStories={setStories}
          />
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
          <RegionDetailPage
          // champRegions={champRegions}
          />
        </Route>

        <Route path = "/login"> 
          <Login setCurrentUser ={setCurrentUser}/>
        </Route>

      </Switch>
      
  
    </div>
    

  );
}

export default App;
