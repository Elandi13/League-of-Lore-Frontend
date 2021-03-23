import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Stories from "./Stories"


function ChampionDetailPage({stories, setStories}){

    // console.log(stories.id)
    const[champion, setChampions] = useState([])
    const params = useParams()
    const id = params.id
    const imageBackground = champion.background
    
    const [formData, setFormData] = useState({story: ""})
    function handleFormChange(event){
        event.preventDefault()
        const updatedForm = {...formData}
        updatedForm[event.target.name] = event.target.value
        setFormData(updatedForm)
    }


    const filteredStories = stories.filter((story)=> {
        return story.champion_id === champion.id
    })


    
    
    const userStories = filteredStories.map((champStory)=>{
        return(
            <Stories
            key={champStory.id}
            id={champStory.id}
            storyText={champStory.story}
            handleDeleteStory={deleteStory}
            />
            )
        })




    function AddStory(newStory){
        const newStories = [...stories, newStory]
        setStories(newStories)
    }
    // console.log(id)
    function deleteStory(id){
        const updatedStories = stories.filter((story)=> story.id !== id)
        setStories(updatedStories)
    }


     function handleSubmit(event){
      event.preventDefault()
        fetch('http://localhost:3000/user_stories', 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                    },
            body: JSON.stringify({user_id: 1, champion_id:champion.id, story:formData.story}),
                })
            .then(response => response.json())
            .then(data => {AddStory(data)}) 
    }


    useEffect(()=>{
        fetch(`http://localhost:3000/champions/${id}`)
        .then(response=> response.json())
        .then((championData)=> {
            setChampions(championData)
        })
    },[id])

    // console.log(champion.id)

    return(
        <div style={{ 
            backgroundImage: `url(${imageBackground})` 
            
          }}>
            <div className="detail-box"> 
                <div className="detail-header">
                    <h1 className="detail-title">
                        {champion.name} 
                    </h1>
                </div>

                <div className="detail-title">
                    <h3 className = "detail-title">
                        {champion.title}
                    </h3>
                </div>

                <div className="detail-faction">
                    <h4 className="detail-faction">
                        Region: {champion.faction}
                    </h4>
                </div>
                
                <div className="detail-clip">
                    <iframe className="clip" title={champion.name} width="600" height="325" src={champion.clip} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
               
                <div className="detail-bio">
                    {champion.bio} 
                </div>


                <div className = "story-container">
                    <h2> The Stories of {champion.name} </h2>
                    
                         {userStories}

                         <div>
                         <form className = "new-form" onSubmit={handleSubmit} > 
                            <label htmlFor = "story" > </label>
                            <input
                            type="text"
                            name="story" 
                            placeholder="Write Story" 
                            value={formData.story}
                            className = "form-control"
                            onChange={handleFormChange}
                            />
                            <button type="submit" className ="submit-story" > Submit Story</button>
                            </form>
                         </div>
                </div>
            </div>
        </div>
    )
}

export default ChampionDetailPage