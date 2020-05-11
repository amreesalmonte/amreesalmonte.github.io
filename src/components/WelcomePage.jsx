import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Links from "./Links";
import App from "../App";
import "../styling/WelcomePage.css"


class WelcomePage extends Component {
    render() {
        return (
            <HashRouter>
                <div className="pageContainer">
                    <div className="welcomeCard">
                        <p className="header">amrees</p>
                        <p className="subHeader">cs student at ualberta</p>
                        <div className="linksGroup">
                            <Links link="http://www.github.com/amreesalmonte" title="github" />
                            <Links link="http://www.linkedin.com/in/amreesalmonte" title="linkedin" />
                        </div>
                    </div>
                    <div className="nextPage">
                        <NavLink to="/app"><p className="nextIcon">></p></NavLink>
                    </div>
                </div>
                <Route path="/app" component={App} />
            </HashRouter>
        );
    }
}

export default WelcomePage;