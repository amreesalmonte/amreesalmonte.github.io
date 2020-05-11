import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import projectsData from "./data/projects";
import Page from "./components/Page";
import About from "./components/About"

const projects = projectsData;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navBar">
                        <Link exact to="/about">
                            <p className="navLink">about</p>
                        </Link>
                        <p className="navLink">work</p>
                        <div className="dropdown">
                            <p className="navLink">projects</p>
                            <div className="dropdownContent">
                                {
                                    projects.map((project, index) => {
                                        return <Link to={project.route}>
                                            <p className="dropdownLink" key={index}>{project.content.header}</p>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/about"><About /></Route>
                        {
                            projects.map((project, index) => {
                                return <Route path={project.route}><Page key={index} page={project.content} /></Route>
                            })
                        }
                    </Switch>
                </div >
            </Router >
        );
    }
}

export default App;
