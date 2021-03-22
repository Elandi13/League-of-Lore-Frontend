import React from "react"
import { Link } from "react-router-dom"

function ChampionCard({id, name, image,}){
    // console.log(id)
    
  
    
    return(
        <div className ="champion-card">
            <Link to = {`/champions/${id}`}> 
            <img id={id} src={image} alt={name} className="card-image"/>
            </Link>
            
                
            <div className="card-content">
                 <h2 className="card-content"> {name} </h2>
            </div> 
        </div>
    )
}

export default ChampionCard;