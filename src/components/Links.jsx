import React, { Component } from 'react';
import "../styling/Links.css"

class Links extends Component {
    render() {
        const { link, title, linkClass } = this.props;
        return (
            <div className={linkClass}>
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
        );
    }
}

export default Links;