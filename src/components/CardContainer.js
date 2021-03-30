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
                faction={champ.faction}
                title={champ.title}
            />
            )
        })
        
        return( 
            <div className ="header">
            <h2><strong> The Champions of Runeterra </strong></h2>
        <div className = "cards"> 
            {championList}
            </div>
        </div>
    )
}

export default CardContainer