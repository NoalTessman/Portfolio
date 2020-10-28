import React, { Component } from 'react'
// import {Link} from "react-router-dom"

import gmail1 from "./icons/gmail1.png"
// import instagram2 from "./icons/instagram2.png"
import instagram1 from "./icons/instagram1.png"
// import linkedin1 from "./icons/linkedin1.png"
import linkedin2 from "./icons/linkedin2.png"
import github1 from "./icons/github1.png"
export default class Footer extends Component {
    render() {
        return (
            <div className="FooterContainer">
                <div className="Copyright">Noal Tessman@2020</div>
                <div className="FooterSocialMediaLinks">
                    <a href="mailto:noal900@email.com" target="_blank" rel="noopener noreferrer"><div className="FooterSocialMediaLink"><img src={gmail1} alt="gmail"/></div></a>
                    <a href="https://www.instagram.com/drums_and_other_things/" target="_blank" rel="noopener noreferrer"><div className="FooterSocialMediaLink"><img src={instagram1} alt="instagram"/></div></a>
                    <a href="https://www.linkedin.com/in/noal-tessman-1b602aaa/" target="_blank" rel="noopener noreferrer"><div className="FooterSocialMediaLink"><img src={linkedin2} alt="LinkedIn"/></div></a>
                    <a href="https://github.com/NoalTessman" target="_blank" rel="noopener noreferrer"><div className="FooterSocialMediaLink"><img src={github1} alt="github"/></div></a>
                </div>
            </div>
        )
    }
}
