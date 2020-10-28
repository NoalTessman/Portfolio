import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="NavName">
                <Link to="/">
                <p>
                Noal Tessman
                </p>
                </Link>
                </div>
                <div className="NavSocialMedia">
                </div>
                <div className="NavLinks">       
                            <Link to="/About" className="NavLink">About</Link>    
                            <Link to="/Projects" className="NavLink">Projects</Link>    
                            {/* <Link to="/Tools" className="NavLink">Tools I Use</Link>     */}
                            <Link to="/Contact" className="NavLink">Contact</Link>
                </div>
            </div>
        )
    }
}
