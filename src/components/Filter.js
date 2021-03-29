import React from "react"

function Filter({search, onSearch}){


    return(
        <div className= "filter-container">
            <div className="search-bar">
                <input 
                id="search" 
                type="search" 
                value ={search}
                placeholder="Search Champion..." 
                onChange={onSearch} />
            </div>
        </div>
           
      
    )
}

export default Filter;