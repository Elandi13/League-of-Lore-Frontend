import React from "react"
// import {useHistory} from "react-router-dom"



function Stories({storyText, id, handleDeleteStory}){

   

    function handleDelete(){
        // console.log(id)
        fetch(`http://localhost:3000/user_stories/${id}`, {
    
            method: 'DELETE',
        })
        handleDeleteStory(id)
    }

    function handleEdit(e){
        console.log(e.target)
    }

    return(
       <div>

        <p>{storyText}</p>
        <button className="edit-button" value={storyText} onClick={handleEdit}> edit </button>
        <button className="delete-button" value={id} onClick={handleDelete} > delete </button>
       </div>
      
        )
    }
    
    export default Stories;
  