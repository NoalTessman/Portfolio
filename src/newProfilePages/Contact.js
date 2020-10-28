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
                    <div className="ContactTitle">Contact</div>
                    <div className="ContactDescription">
                        <p>
                        Want to get in touch so we can work 
                        together? 
                        </p>
                        <p>
                        I am currently seeking a full time oppurtunity for being a front-end, 
                        Full-stack, Software Developer, Wed Designer, or whatever
                        the trend is at the moment. 
                        </p>
                        <p>
                        I would love to work with you or your 
                        company.
                        </p>
                    </div>
                <ContactForm />
                </div>
                <Footer />
            </div>
        )
    }
}
