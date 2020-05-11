import React, { Component } from "react";
import Links from "./Links";

class Page extends Component {
    render() {
        const { header, subHeader, description, githubLink, websiteLink } = this.props.page;
        return (
            <div>
                <h1>{header}</h1>
                {githubLink !== null && <Links link={githubLink} title="github" />}
            </div>
        );
    }
}

export default Page;
