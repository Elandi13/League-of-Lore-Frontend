import React from "react"
import ChampionCard from "./ChampionCard"

function CardContainer({filteredChamps}) {
    const championList = filteredChamps.map((champ)=>{
        return( <ChampionCard 
                key={champ.clip}
                id ={champ.id}
                name ={champ.name}
                bio={champ.bio}
                image={champ.image}
            />
            )
        })
    

    return( 
        <div class = "card-container"> 
        
          {championList}
           
        </div>
    )
}

export default CardContainer