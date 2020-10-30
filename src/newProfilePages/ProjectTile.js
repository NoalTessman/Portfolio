import React, { Component } from 'react';

export default class ProjectTile extends Component {

    render() {

        return (
            <div className="ProjectTile">
                <a href={this.props.link} target={this.props.target?this.props.target:`_blank`} alt={this.props.id}>
                <div>
                    <img src={this.props.image} id="ProjectTileImage"/>
                </div>
                </a>
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
