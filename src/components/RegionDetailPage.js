import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

function RegionDetailPage(){
    const[region, setRegions] = useState([])
    const params = useParams()
    const id = params.id 
    const imageBackground = region.image
    
    useEffect(()=>{
        fetch(`http://localhost:3000/regions/${id}`)
        .then(response => response.json())
        .then((regionData) => {
            setRegions(regionData)
        })
    },[id])
    
    return(
        <div style={{ 
            backgroundImage: `url(${imageBackground})` 
          }}>
            <div className="detail-box"> 
                <div className="detail-header">
                    <h1 className="detail-title">
                        {region.name} 
                    </h1>
                </div>
        
                <div className="detail-bio">
                    {region.summary} 
                </div>
            </div>
        </div>
    )
}


export default RegionDetailPage;