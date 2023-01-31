import React from "react";
import About from "./About";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import Project from "./Project";
import { Route, useLocation } from "react-router-dom"
import SlideRoutes from 'react-slide-routes';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      <NavBar />
        <SlideRoutes location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />}/>
        </SlideRoutes>
    </div>
  );

}

export default App;
