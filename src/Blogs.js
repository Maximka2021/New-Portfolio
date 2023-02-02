import react from 'react'
import './css/Blogs.css'

function Blogs(){

    return(
        <div className="main-blogs">
            <h1>My Medium Blogs</h1>
                <div className="blog-container">
                    <h1 className="blog-header"><a className="blog-header" href="https://medium.com/@polyakovmaxim05/fetch-and-http-methods-7cc6f1a43e8d">Fetch and HTTP Methods</a></h1>
                    <p className="blog-desc">The fetch() method is a useful tool if you want to use third-party APIs in your website or if you created your own...</p>
                </div>
                <div className="blog-container">
                    <h1 className="blog-header"><a className="blog-header" href="https://medium.com/@polyakovmaxim05/react-useeffect-hook-80dc03f6b3b7">React useEffect hook</a></h1>
                    <p className="blog-desc">Once you start to learn React.js, one of the main features that you will need to know is React hooks...</p>
                </div>
                <div className="blog-container">
                    <h1 className="blog-header"><a className="blog-header" href="https://medium.com/@polyakovmaxim05/classes-in-ruby-383eb41fc883">Object Oriented Ruby</a></h1>
                    <p className="blog-desc">One of the core features of every programming language is Classes and Objects...</p>
                </div>
                <div className="blog-container">
                    <h1 className="blog-header"><a className="blog-header" href="https://medium.com/@polyakovmaxim05/object-oriented-javascript-2dc8079eaf32">Object Oriented JavaScript</a></h1>
                    <p className="blog-desc">Once you start learning JavaScript, one of the core concepts you need to know is Object Oriented Programming...</p>
                </div>
        </div>
    )
}

export default Blogs