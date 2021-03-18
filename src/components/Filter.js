import React from "react"

function Filter({search, onSearch}){
    return(
        <div class = "filter-container">
            <div class= "search-bar">
                <input class = "search-input" name ="search" value={search} placeholder="Search By Name..." onChange = {onSearch}/>
            </div>
        </div>
    )
}

export default Filter;