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
                <img className="image" src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" />
            </div>
        </div>
    )
}

export default MainPageCont