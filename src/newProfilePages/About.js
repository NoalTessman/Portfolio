import React, { Component } from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import Headshot from "../newProfileAssets/Headshot.png"
export default class About extends Component {
    render() {
        return (
            <div>
            <NavBar />
                <div className="AboutContainer">
                    <div className="AboutProfile">
                        <img src={Headshot}/>
                    </div>
                    <div className="AboutDescription">
                        <p class="AboutDescriptionTitle">About</p>
                        <p class="AboutDescriptionBody"> 
                            <p>Hi, I'm Noal.</p> 
                            I've been in the technology world enough to know many different facets of what makes a person exciting and pleasant to work with. I have many years of experience in IT and coding, along with knowledge of a wide array tools and programs to make that easier.
                            <p>
                            As a programmer and IT support specialist with several years of experience scripting, coding, and Software/Hardware knowledge, I am adept at working with many different languages to get the job done. Additionally, I aim to make sure the work environment is fun and exciting. My goal is to add demonstratable value to your company through coding efficiently and using modern tools and practices to do so.
                            </p> 
                        </p>
                    </div>
                    <div className="AboutWhatIDoContainer">
                        <div className="AboutWhatIDoTitle">
                           <p>What I Use</p>
                        </div>
                        <div className="AboutWhatIDoItemList">
                        <p>Languages</p>
                            <li>Python</li>
                            <li>Ruby</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>MariaDB</li>
                            <li>Redux</li>
                            <li>React.Router</li>
                            <li>HTML</li>
                            <li>Powershell</li>
                            <li>Node.JS</li>
                        </div>
                        <div className="AboutWhatIDoItemList">
                        <p>Programs</p>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe XD</li>
                            <li>Adobe Premiere</li>
                            <li>Linux (Mint, Ubuntu, 
                                Lubuntu, xfce, Parrot)</li>
                            <li>MacOS</li>
                            <li>Windows (xp/7/8/10)</li>
                            <li>Active Directory</li>
                            <li>Office 365</li>
                        </div>
                        <div className="AboutWhatIDoItemList">
                        <p>Tools</p>
                            <li>PIL</li>
                            <li>CSS</li>
                            <li>CSS3</li>
                            <li>Flexbox</li>
                            <li>CSS Grid</li>
                            <li>Plot.ly</li>
                        </div>
                        <div className="AboutWhatIDoItemList" id="AboutWhatIDoItemListLearning">
                        <p>Learning</p>
                            
                            <li>TypeScript</li>
                            <li>Django</li>
                            <li>After Affects</li>
                            <li>Data Science</li>
                            <li>Docker </li>
                        </div>
                    </div>
                    <div className="ProjectResume">
                        <a href="./ProjectAssets/Resume.pdf" target="_blank" download><span>My Resume</span></a>
                    </div>
                <Footer />
                </div>
            </div>
        )
    }
}
