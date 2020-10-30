import React, { Component } from 'react';
import {Link} from "react-router-dom"
export default class ProjectTileRouter extends Component {

    render() {

        return (
            <div className="ProjectTile">
                <Link to={this.props.link} alt={this.props.id}>
                <div className="ProjectTileImage">
                    <img src={this.props.image} id="ProjectTileImage"/>
                </div>
                </Link>
                <div className="ProjectTileText">
                <p class="ProjectTileTitle">
                        {this.props.title}
                    </p>  
                <p class="ProjectTileDescription">
                    {this.props.description}
                </p>
                </div>
            </div>
        )
    }
}
