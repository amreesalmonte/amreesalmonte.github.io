import React, { Component } from 'react';

class Links extends Component {
    render() {
        const { link, title } = this.props;
        return (<a href={link} target="_blank" rel="noopener noreferrer" className="externalLink">{title}</a>);
    }
}

export default Links;