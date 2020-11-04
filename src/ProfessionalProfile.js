import React, { Component } from 'react'
import "./ProfessionalProfile.css"
import {Link} from "react-router-dom"

export default class ProfessionalProfile extends Component {
    render() {
        return (
                <div className="home">
                    <div className="homeTitle">
                        <p className="homeName">Noal Tessman</p>
                        <p className="homeTitles">
                            <p><span>S</span>oftware Developer </p>
                            <p><span>W</span>eb Developer</p>
                            <p><span>F</span>ront-end Developer</p>
                        </p>
                    </div>
                    <div className="homeLinks">
                        <div className="homeLink">
                            <Link to="/About"><span id="homeLinkText">About</span></Link></div>    
                        <div className="homeLink">
                            <Link to="/Projects"><span id="homeLinkText">Projects</span></Link></div>    
                        <div className="homeLink">
                            <Link to="/Contact"><span id="homeLinkText">Contact</span></Link></div>    
                    </div>
                    
                </div>
        )
    }
}
