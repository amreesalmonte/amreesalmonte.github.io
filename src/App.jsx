import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import projectsData from "./data/projects";
import experiencesData from "./data/experiences";
import Page from "./components/Page";
import About from "./components/About"

const projects = projectsData;
const experiences = experiencesData;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navBar">
                        <Link to="/">
                            <p className="navLink">home</p>
                        </Link>

                        <div className="dropdown">
                            <p className="navLink">experiences</p>
                            <div className="dropdownContent">
                                {
                                    experiences.map((experience, index) => {
                                        return <Link to={experience.route}>
                                            <p className="dropdownLink" key={index}>{experience.content.header}</p>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>

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
                        <Route exact path="/"><About /></Route>
                        {
                            experiences.map((experience, index) => {
                                return <Route exact path={experience.route}><Page key={index} page={experience.content} /></Route>
                            })
                        }
                        {
                            projects.map((project, index) => {
                                return <Route exact path={project.route}><Page key={index} page={project.content} /></Route>
                            })
                        }
                    </Switch>
                </div >
            </Router >
        );
    }
}

export default App;
