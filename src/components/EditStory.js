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
        fetch(`http://localhost:3000/user_stories/${id}`, {
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
        <form className="edit-message" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="body"
          autoComplete="off"
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    )
}

export default EditStory;