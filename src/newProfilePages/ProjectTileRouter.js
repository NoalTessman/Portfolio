import React, { Component } from 'react';
import {Link} from "react-router-dom"
export default class ProjectTileRouter extends Component {

    render() {

        return (
            <div className="ProjectTile" id={this.props.id}>
                <Link href={this.props.link} target={this.props.target?this.props.target:`_blank`} alt={this.props.id}>
                    {this.props.title}
                </Link>
            </div>
        )
    }
}
