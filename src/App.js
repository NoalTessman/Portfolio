import React, { Component } from 'react'
import ProfessionalProfile from "./ProfessionalProfile"
import {Route, Switch, BrowserRouter} from "react-router-dom"
import About from "./newProfilePages/About"
import Contact from "./newProfilePages/Contact"
import Projects from "./newProfilePages/Projects"
import Tools from "./newProfilePages/Tools"
import SlitScan from "./newProfilePages/SlitScanPhotography"
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="PageContainer">
                <Switch>
                    <Route exact path="/" component={ProfessionalProfile}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route exact path="/Projects" component={Projects}/>
                    <Route path="/Tools" component={Tools}/>
                    <Route path="/Projects/SlitScan" component={SlitScan}/>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}
