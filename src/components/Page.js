import React, { Component } from "react";
import Links from "./Links";
import "../styling/Page.css"

class Page extends Component {
    render() {
        const { header, subHeader, description, githubLink, websiteLink, figma } = this.props.page;
        return (
            <div className="pageBody">
                <div className="pageContent">
                    <p className="header">{header}</p>
                    <p className="subHeader">{subHeader}</p>
                    <p className="description">{description}</p>
                    <div className="linksGroup">
                        {githubLink !== null && <Links link={githubLink} title="github" />}
                        {githubLink !== null && <Links link={websiteLink} title="website" />}
                    </div>
                    {figma !== null && <iframe title="project demo" className="figmaWindow" src={figma} allowFullScreen />}
                </div>
            </div>
        );
    }
}

export default Page;
