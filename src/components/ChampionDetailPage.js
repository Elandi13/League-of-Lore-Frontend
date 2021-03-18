import React, { useEffect, useState } from "react"
import { useParams } from "react-router"


function ChampionDetailPage(){
    const[champion, setChampions] = useState([])
    const params = useParams()
    const id = params.id
    const imageBackground = champion.background


    useEffect(()=>{
        fetch(`http://localhost:3000/champions/${id}`)
        .then(response=> response.json())
        .then((championData)=> {
            setChampions(championData)
        })
    },[id])
    return(
        <div style={{ 
            backgroundImage: `url(${imageBackground})` 
          }}>
            <div class="detail-box"> 
                <div class="detail-header">
                    <h1 class="detail-title">
                        {champion.name} 
                    </h1>
                </div>

                <div class="detail-title">
                    <h3 class = "detail-title">
                        {champion.title}
                    </h3>
                </div>
                
                <div class="detail-clip">
                    <iframe class="clip" title={champion.name} width="650" height="315" src={champion.clip} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                
                {/* <div class="episode-box">
                    <h3 class="detail-episode">
                        Episode: {champion.faction} 
                    </h3>
                </div> */}

                {/* <div class="aired-box">
                    <h2 class="detail-date-aired">
                        Original Date Aired: {champion.faction}
                    </h2>
                </div> */}

                <div class="detail-description">
                    {champion.bio} 
                </div>
            </div>
        </div>
    )
}

export default ChampionDetailPage