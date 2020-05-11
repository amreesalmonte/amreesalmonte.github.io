import React, { Component } from "react";
import Links from "./Links";
import "../styling/Page.css"

class Page extends Component {
    render() {
        const { header, subHeader, descriptions, githubLink, websiteLink, figma } = this.props.page;
        return (
            <div className="pageBody">
                <div className="pageContent">
                    <div className="headings">
                        <p className="header">{header}</p>
                        <p className="subHeader">{subHeader}</p>
                    </div>
                    <div className="description">
                        {descriptions.map((description) => { return <li>{description}</li> })}
                    </div>
                    <div className="linksGroup">
                        {githubLink !== null && <Links link={githubLink} title="github" />}
                        {websiteLink !== null && <Links link={websiteLink} title="website" />}
                    </div>
                    {figma !== null && <iframe title="project demo" className="figmaWindow" src={figma} allowFullScreen />}
                </div>
            </div>
        );
    }
}

export default Page;
