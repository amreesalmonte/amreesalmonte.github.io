import React, { Component } from "react";
import Links from "./Links";

class Content extends Component {
    render() {
        const { header, subHeader, description, githubLink, websiteLink } = this.props.content;
        return (
            <div>
                <h1>{header}</h1>
                <Links link={githubLink} title="github" />
            </div>
        );
    }
}

export default Content;
