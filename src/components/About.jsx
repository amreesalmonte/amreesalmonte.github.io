import React, { Component } from 'react';
import Links from "./Links";
import "../styling/About.css"

class About extends Component {
    render() {
        return (
            <div className="aboutBody">
                <div className="aboutContent">
                    <p className="title">Hello! I'm Am :D</p>
                    <p className="secTitle">cs student at <b>ualberta</b></p>
                    <div className="linksGroup">
                        <Links link="http://www.github.com/amreesalmonte" title="github" />
                        <Links link="http://www.linkedin.com/in/amreesalmonte" title="linkedin" />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;