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
        <div className ="header">
            <h2><strong> Welcome to The World of Runeterra </strong></h2>

            <div className = "cards">
                {regionsList}
            </div>
        </div>
    )
}

export default RegionCardContainer;