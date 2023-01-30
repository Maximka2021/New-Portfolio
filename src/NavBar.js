import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './css/NavBar.css'

function NavBar(){
    const navigate = useNavigate()

    const handleAbout = () => navigate('/about')

    const [navDiv, setNavDiv] = useState(false)

    return(
        <div className="nav-bar">
            <div className="my-name">
                {/* <h1>Maxim Polyakov</h1> */}
            </div>
            <div className="nav-options">
                <p className="nav-option" onClick={handleAbout}>About</p>
                <p className="nav-option">Projects</p>
                <p className="nav-option">Blogs</p>
                <p className="nav-option">Contact</p>

                <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden"/>
                 <label htmlFor="checkbox1">
                    <div className="hamburger hamburger1" onClick={() => setNavDiv(!navDiv)}>
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                    </div>
                 </label>
            </div>
            <div className={navDiv ? "mobile-nav" : "hide"}>
                <div className="mobile-nav-div-list">
                    <p className="mobile-nav-option" onClick={handleAbout}>About</p>
                    <p className="mobile-nav-option">Projects</p>
                    <p className="mobile-nav-option">Blogs</p>
                    <p className="mobile-nav-option">Contact</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar