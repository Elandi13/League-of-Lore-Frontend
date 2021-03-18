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

                <div class="detail-faction">
                    <h4 class="detail-faction">
                        Region: {champion.faction}
                    </h4>
                </div>
                
                <div class="detail-clip">
                    <iframe class="clip" title={champion.name} width="600" height="325" src={champion.clip} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
               
                <div class="detail-bio">
                    {champion.bio} 
                </div>
            </div>
        </div>
    )
}

export default ChampionDetailPage