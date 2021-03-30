import React from "react"
import { Link } from "react-router-dom"

function ChampionCard({id, name, image}){
    return(
        <div className="wrapper">

    <div className="cards">

    <figure className="card">
        <Link to = {`/champions/${id}`}>
        <img src={image}  alt="champion"/>
        </Link>

        <figcaption>{name}</figcaption>

    </figure>
</div>


</div>
    )
}

export default ChampionCard;
