import React from "react";
import './css/Project.css'
import image1 from "./images/phase-2-project.png"
import image2 from "./images/phase-3-project.png"
import image3 from "./images/phase-5-project.png"

function Project(){
    return(
        <div className="project-main">
            <div className="projects-container">
                <div className="project-holder">
                    <div className="image-holder">
                        <img className="project-image" src={image1} alt="" />
                    </div>
                    <div className="desc-holder">
                        <h1 className="project-name">Pet Meets Pet</h1>
                        <p className="project-desc">In this project I created a combination of Instagram and Tinder, but for pets.</p>
                    </div>
                    <div className="button-holder">
                        <a className="project-button" href="https://github.com/Maximka2021/Pets">GitHub</a>
                        <a className="project-button" href="https://www.loom.com/share/6c150920da51418da81d18d992c0e236">Demo</a>
                    </div>
                </div>

                <div className="project-holder">
                    <div className="image-holder">
                        <img className="project-image" src={image2} alt="" />
                    </div>
                    <div className="desc-holder">
                        <h1 className="project-name">Flatiron RPG</h1>
                        <p className="project-desc">Here I created a simple RPG game.</p>
                    </div>
                    <div className="button-holder">
                        <a className="project-button" href="https://github.com/AngelG-byte/phase-3-sinatra-react-project">GitHub</a>
                        <a className="project-button" href="https://www.loom.com/share/afb6c2460c6b4368bc2e3df70c3cb5d9">Demo</a>
                    </div>
                </div>

                <div className="project-holder">
                     <div className="image-holder">
                        <img className="project-image" src={image3} alt="" />
                    </div>
                    <div className="desc-holder">
                        <h1 className="project-name">Discord Clone</h1>
                        <p className="project-desc">In this project I tried to create a Discord clone</p>
                    </div>
                    <div className="button-holder">
                        <a className="project-button" href="https://github.com/Maximka2021/Discord-Clone">GitHub</a>
                        <a className="project-button" href="https://www.loom.com/share/2bd2724d69fa47bd8508def0a153ee72">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project