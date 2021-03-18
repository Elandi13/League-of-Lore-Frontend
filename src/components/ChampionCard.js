import React from "react"
import { Link } from "react-router-dom"

function ChampionCard({id, name, image,}){
    // console.log(id)
    
  
    
    return(
        <div class ="champion-card">
            <Link to = {`/champions/${id}`}> 
            <img id={id} src={image} alt={name} class="card-image"/>
            </Link>
            
                
            <div class="card-content">
                 <h2 class="card-content"> {name} </h2>
            </div> 
        </div>
    )
}

export default ChampionCard;