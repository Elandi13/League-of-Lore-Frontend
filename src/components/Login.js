import React, { useState } from "react"
import { useHistory } from "react-router";

function Login({setCurrentUser}){
    const[loginData, setLoginData] = useState({
        usernmae: "",
        password: "",

    })

    const history = useHistory()

    function handleChange(e){
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(loginData)
         })
            .then((r) => r.json())
            .then((user) => {
                // console.log(user)
                setCurrentUser(user)
                history.push("/")
            })

        }
        return(
        <div className = "login">
            <div className="login-form-box"> 
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-form" > Please Login!</h1>
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        name="username"
                        autoComplete="off"
                        value={loginData.username}
                        onChange={handleChange}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        />
                        <br></br>
                    <input type="submit" value="Login" className='input-button' />
                </form>
            </div>
        </div> 
    

    )
    
}


export default Login;