import React from "react"
import {Link} from "react-router-dom"

function Header({currentUser, setCurrentUser}){
    return(
        <div class = "header-container">
            <Link to="/"> 

            <img className = "logo-image" src ="https://cdnb.artstation.com/p/assets/images/images/021/422/255/large/t-j-geisen-lol-icon-rendered-v001.jpg?1571640551" alt = "logo" height ="150vh" width ="150vw"/>

            </Link>

            {currentUser ? (
                <>
            <div class="nav-option" id="visit-champions-link">
                <Link className='nav-link' to ="/"> Champions </Link>
            </div>

            <div class="nav-option" id="visit-regions-link">
                <Link className='nav-link' to ="/regions"> Regions </Link>
            </div>

            <div class="nav-option" id="logout-link">
                <Link className='nav-link' to="/" onClick={()=> setCurrentUser(null)}> Logout </Link>
            </div>
                </>
                ) :( 
              <>
            <div class="nav-option" id="visit-champions-link">
                <Link className='nav-link' to ="/"> Champions </Link>
            </div>

            <div class="nav-option" id="visit-regions-link">
                <Link className='nav-link' to ="/regions"> Regions </Link>
            </div>
                    
            <div class="nav-option" id="visit-login-link">
                <Link className='nav-link' to ="/login"> Login </Link>
            </div>

              </>  
            )}

        </div>
    )
}

export default Header;