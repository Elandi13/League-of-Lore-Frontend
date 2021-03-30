import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Champions from "./ChampionRegions"

function RegionDetailPage(){
    const[region, setRegions] = useState([])
    const[champions, setChampions] = useState([])
    const params = useParams()
    const id = params.id 
    // const imageBackground = region.image
    
    useEffect(()=>{
        fetch(`http://localhost:3000/regions/${id}`)
        .then(response => response.json())
        .then((regionData) => {
            setRegions(regionData)
        })
    },[id])



    useEffect(()=>{
        fetch(`http://localhost:3000/champion_regions`)
        .then(response => response.json())
        .then((championRegion) => {
            setChampions(championRegion)
        })
    },[])


    const filterChamps = champions.filter((champ)=>{
        if(region.id === champ.region.id){
            return setChampions
        }
    })
    // console.log(filterChamps)

    const champList = filterChamps.map((champ)=>{
        return(
            <Champions
            key = {champ.id}
            id = {champ.champion.id}
            name={champ.champion.name}
            image={champ.champion.image}
            />
        ) 
    })

    console.log(region)

    return(
        <div className ="region-background-image">
            <img src = {region.image} alt = "region-background"/>
            <div className ="header"> 
                <div>
                    <h1>
                        {region.name} 
                    </h1>
                </div>
        
                <div className = "region-summary">
                    {region.summary} 
                </div>
                <br/>
                    <iframe className="clip" title = "cinematic" width="600" height="325" src={region.background} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className ="header">
                   <h1> The Champions of {region.name}</h1> 
                   <div className = "cards">
                    {champList}
                   </div>
                </div>
            </div>
        </div>
        )
    }
    
    
    export default RegionDetailPage;