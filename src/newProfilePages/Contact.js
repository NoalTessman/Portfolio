import React, { Component } from 'react'
import NavBar from "../NavBar"
import Footer from "../Footer"
import ContactForm from "./ContactForm"


export default class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar />
                    <div className="ContactContainer">
                        <div className="ContactDescription">
                            
                            <span>I am currently seeking a full-time position as a Front-End Developer,</span>
                            <span>Thank you for visiting and I would be glad to get in contact with you.</span>
                        </div>
                        <div className="LinkContainer">

                        </div>
                        <div className="ContactForm"><ContactForm /></div>
                    </div>
                <Footer />
            </div>
        )
    }
}
