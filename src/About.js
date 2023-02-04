import React from "react";
import "./css/About.css"

function About(){
    return(
        <div className="about-main">
            <h1 className="skills-header">About Me</h1>
            <p className="par-1">Hello, my name is Maxim Polyakov, I am 18 years old and in the autumn of 2022, I started attending Flatiron School, and my major is software engineering. After graduation, I am planning to start my career as a Software Engineer.</p>
            <h1 className="skills-header">My Tech Skills</h1>
            <p className="skills">1. My frontend skills are HTML, CSS, JavaScript, React.js, and Vue.js.</p>
            <p className="skills">2. My backend skills are Ruby and Rails, SQL, and Python.</p>
            <h1 className="skills-header">My Soft Skills</h1>
            <p className="skills">1. Problem-solving and patience are my greatest skills which have always led me to success!</p>
            <p className="skills">2. I am proud that people around me appreciate my communication skills and honesty!</p>
            <p className="skills">3. Time management and prioritizing helped me a lot in my school and coding Bootcamp!</p>
            <p className="skills">4. If I am facing a problem I will try to understand why did that happen and what should I do to prevent similar problems in the future!</p>
            <h1 className="links-header">Links</h1>
            <div className="links-holder">
                <a className="link" href="https://www.linkedin.com/in/maxim-polyakov/">LinkedIn</a>
                <a className="link" href="https://github.com/Maximka2021">GitHub</a>
                <a className="link" href="https://medium.com/@polyakovmaxim05">Medium</a>
            </div>
        </div>
    )
}

export default About