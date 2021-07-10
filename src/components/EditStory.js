import React,{useState} from "react"



function EditStory({id, body, onUpdateStory}){
    const [messageBody, setMessageBody] = useState(body)

    function handleFormSubmit(e) {
        e.preventDefault()

        const data ={ 
            "story":{
                "story": messageBody
            }
        }
        // console.log(data)
        // console.log(messageBody)
        fetch(`https://league-of-lore.herokuapp.com/user_stories/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        // console.log(data.story.body)
        .then(response => response.json())
        .then(data => onUpdateStory(data))

        // .then(data => console.log(data.story.body))
        // .then(newData => console.log(newData))
      }

      

    return(
      <div className ="form-container">
        <form className="edit-message" onSubmit={handleFormSubmit}>
          <label>
            Edit Your Review: <br/>
            <textarea  
            className = "edit-text"
            type="text"
             name ="body" 
             autoComplete="off" 
             value={messageBody} 
             onChange={(e) => setMessageBody(e.target.value)} 
             />
          </label>
          <br/>
          <button type ="submit" className="submit-button"> Update Story </button>
      </form>
          </div>
    )
}

export default EditStory;