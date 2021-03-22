import React from "react"
import ChampionCard from "./ChampionCard"

function CardContainer({filteredChamps}) {
    const championList = filteredChamps.map((champ)=>{
        return( <ChampionCard 
                key={champ.id}
                id ={champ.id}
                name ={champ.name}
                bio={champ.bio}
                image={champ.image}
            />
            )
        })
    

    return( 
        <div className = "card-container"> 
        
          {championList}
           
        </div>
    )
}

export default CardContainer