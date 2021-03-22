import React from "react"
import RegionCard from "./RegionCard"

function RegionCardContainer({regions}){
    const regionsList = regions.map((region)=> {
       return( <RegionCard
        key = {region.id}
        id = {region.id}
        name ={region.name}
        image ={region.image}
        />
       )
    })

    return(
    <div className = "card-container">
        {regionsList}
    </div>
    )
}

export default RegionCardContainer;