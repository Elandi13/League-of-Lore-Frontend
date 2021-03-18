import React from "react"
import {Link} from "react-router-dom"

function Header(){
    return(
        <div class = "header-container">
            <Link to="/"> 

            <img className = "logo-image" src ="https://assets-global.website-files.com/5ef615e9762a35568441456c/5f5012abd7ca839f84095ebb_runeterralogo.jpg" alt = "logo" height ="150vh" width ="150vw"/>

            </Link>

            <div class="nav-option" id="visit-champions-link">
                <Link className='nav-link' to ="/champions"> Champions </Link>
            </div>

            <div class="nav-option" id="visit-regions-link">
                <Link className='nav-link' to ="/"> Regions </Link>
            </div>

            <div class="nav-option" id="visit-login-link">
                <Link className='nav-link' to ="/"> Login </Link>
            </div>

            {/* <div class="nav-option" id="favorite-champion-link">
                <Link className='nav-link' to ="/"> Favorite Champs </Link>
            </div> */}

            




        </div>
    )
}

export default Header;