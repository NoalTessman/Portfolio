import React, { Component } from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import ProjectTile from "./ProjectTile"
import ProjectTileRouter from "./ProjectTileRouter"
import { Link } from "react-router-dom"


// Images
import github from "./ProjectPhotos/github.PNG"
import Photography from "./ProjectPhotos/PhotographyWebsite.PNG"
import oldProfile from "./ProjectPhotos/oldProfile.PNG"
import PoemFinder from "./ProjectPhotos/poemFinder.PNG"
import Nature from "./ProjectPhotos/Nature.jpeg"
import repl from "./ProjectPhotos/repl.PNG"



export default class Projects extends Component {
    render() {
        return (
            <div>
                <NavBar />
                    <div className="ProjectHome">
                       <div className="ProjectTileHolder">
                            <ProjectTile title="DSC Photography" id="PhotographyWebsite" link="https://delaneychlarsonphotography.netlify.app" image={Photography} description="A project I made for my Wife's Photography business, mostly finished, only responsiveness and new images need to be added."/> 
                            <ProjectTileRouter title="Slit-Scan Timelapses" id="slitScan" link="/SlitScan" image={Nature} description="A project I made in python that iterates through videos to produce trippy images, dives into the weird world of 'Slit-Scan Photography'"/> 
                            <ProjectTile title="Old Portfolio" id="OldProfile" link="https://5f9058466943420a8018926f--inspiring-knuth-c0dd1a.netlify.app/" image={oldProfile} description="My old Web Dev portoflio, not completely finished, but has some really nice design aesthetics"/>  
                            <ProjectTile title="PoemFinder" id="PoemFinder" link="https://poemfinder.netlify.app/" image={PoemFinder} description="This was an app I developed in V school which navigates through the OpenPoemDB"/> 
                            <ProjectTile title="Github" id="github" link="https://github.com/NoalTessman" image={github} description="MY github, coding collection for many years, everything I've done besides ruby is on here."/> 
                            <ProjectTile title="Repl.it" id="repl" link="https://repl.it/@Noal900" image={repl} description="This is a collection of projects made on repl.it, mostly ruby, but some websites made with HTML, CSS, and JS, and some python."/> 
                        </div> 
                    </div>
                <Footer />
            </div>
        )
    }
}
