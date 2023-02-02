import React from "react";
import "./css/MainPageCont.css"

function MainPageCont(){
    return(
        <div className="main-div">
            <div className="intro-div">
                <h1 className="name-text">Hello, I'm Maxim Polyakov</h1>
                <br />
                <p className="intro-text">I'm software engineer based in Florida, United States</p>
            </div>
            <div className="image-div">
                <img className="image" src="https://ca.slack-edge.com/T02MD9XTF-U043KGD0EV8-55814e8a1d84-512" />
            </div>
        </div>
    )
}

export default MainPageCont