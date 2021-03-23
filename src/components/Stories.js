import React, { useState } from "react"
import EditStory from "./EditStory"


function Stories({storyText,id, handleDeleteStory, onUpdateStory}){
    const[isEditing, setIsEdited] = useState(false)
    

    

    function handleDelete(){
        // console.log(id)
        fetch(`http://localhost:3000/user_stories/${id}`, {
    
            method: 'DELETE',
        })
        handleDeleteStory(id)
    }

    function handleUpdateNewStory(updateEdit){
        setIsEdited(false)
        onUpdateStory(updateEdit)
    }

    return(
       <div>
           {/* <p> {storyText} </p> */}
        {isEditing ? <EditStory id={id} body={storyText} onUpdateStory={handleUpdateNewStory}/> : <p>{storyText}</p>}   
        {/* <p>{storyText}</p> */}
        <button className="edit-button" onClick={() => setIsEdited(isEditing => !isEditing)} > edit </button>
        <button className="delete-button" value={id} onClick={handleDelete} > delete </button>
       </div>
      
        )
    }
    
    export default Stories;
  