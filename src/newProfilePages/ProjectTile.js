import React, { Component } from 'react';

export default class ProjectTile extends Component {

    render() {

        return (
            <div className="ProjectTile" id={this.props.id}>
                <a href={this.props.link} target={this.props.target?this.props.target:`_blank`} alt={this.props.id}>
                    {this.props.title}
                </a>
            </div>
        )
    }
}
