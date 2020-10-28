import React, { Component } from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import ProjectTile from "./ProjectTile"

export default class Projects extends Component {
    render() {
        return (
            <div>
                <NavBar />
                    <div className="ProjectHome">
                       <div className="ProjectTileHolder">
                            <ProjectTile title="github" id="github" link="https://github.com/NoalTessman"/> 
                            <ProjectTile title="Slit-Scan Timelapses" id="slitScan" link="./Projects/SlitScan" target="_self"/> 
                            <ProjectTile title="Old Portfolio" id="OldProfile" link="https://5f9058466943420a8018926f--inspiring-knuth-c0dd1a.netlify.app/"/>  
                            <ProjectTile title="PoemFinder" id="PoemFinder" link="https://poemfinder.netlify.app/"/> 
                            <ProjectTile title="repl.it" id="repl" link="https://repl.it/@Noal900"/> 
                            <ProjectTile title="Delaney Chlarson Photography" id="PhotographyWebsite" link="https://delaneychlarsonphotography.netlify.app"/> 
                        </div> 
                    </div>
                <Footer />
            </div>
        )
    }
}
