import React, { Component } from 'react';
import Links from "./Links";
import "../styling/WelcomePage.css"

class WelcomePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>amrees</p>
                <p>cs student at ualberta</p>
                <div className="linksGroup"><Links link="http://www.github.com/amreesalmonte" title="github" />
                    <Links link="http://www.linkedin.com/in/amreesalmonte" title="linkedin" /></div>
            </div>
        );
    }
}

export default WelcomePage;