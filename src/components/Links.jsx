import React, { Component } from 'react';

class Links extends Component {
    render() {
        const { link, title } = this.props;
        return (<div className="linkOuter"><a href={link} target="_blank" rel="noopener noreferrer" className="pageLink">{title}</a></div>);
    }
}

export default Links;