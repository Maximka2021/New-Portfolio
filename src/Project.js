import React from "react";
import './css/Project.css'

function Project(){
    return(
        <div className="project-main">
            <div className="projects-container">
                <div className="project-holder">
                    <div className="image-holder">
                        <img className="project-image" src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" alt="" />
                    </div>
                    <div className="desc-holder">
                        <h1 className="project-name">Pet Meets Pet</h1>
                        <p className="project-desc">In this project I created a combination of Instagram and Tinder, but for pets.</p>
                    </div>
                    <div className="button-holder">
                        <button className="project-button">GitHub</button>
                        <button className="project-button">Demo</button>
                    </div>
                </div>

                <div className="project-holder">
                    <div className="image-holder">
                        <img className="project-image" src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" alt="" />
                    </div>
                    <div className="desc-holder">
                        <h1 className="project-name">Flatiron RPG</h1>
                        <p className="project-desc">Here I created a simple RPG game.</p>
                    </div>
                    <div className="button-holder">
                        <button className="project-button">GitHub</button>
                        <button className="project-button">Demo</button>
                    </div>
                </div>

                <div className="project-holder">
                     <div className="image-holder">
                        <img className="project-image" src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" alt="" />
                    </div>
                    <div className="desc-holder">
                        <h1 className="project-name">Discord Clone</h1>
                        <p className="project-desc">In this project I tried to create a Discord clone</p>
                    </div>
                    <div className="button-holder">
                        <button className="project-button">GitHub</button>
                        <button className="project-button">Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project