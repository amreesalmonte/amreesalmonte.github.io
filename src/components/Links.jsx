import React, { Component } from 'react';
import "../styling/Links.css"

class Links extends Component {
    render() {
        const { link, title } = this.props;
        return (
            <div className="linkContainer">
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
        );
    }
}

export default Links;