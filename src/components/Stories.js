import React from "react"
// import {useHistory} from "react-router-dom"



function Stories({storyText}){
    
        
    return(
       <div>

        <p>{storyText}</p>
        <button> edit </button>
        <button> delete </button>
       </div>
      
        )
    }
    
    export default Stories;
  