import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Project;
