import React from "react"

function Filter({search, onSearch}){
    return(
        <div className = "filter-container">
            <div className= "search-bar">
                <input className = "search-input" name ="search" value={search} placeholder="Search By Name..." onChange = {onSearch}/>
            </div>
        </div>
    )
}

export default Filter;