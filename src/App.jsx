import React, { Component } from "react";
/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";*/
import {
    HashRouter,
    Route,
    NavLink
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
            <HashRouter>
                <div>
                    <div className="navBar">
                        <NavLink to="/">
                            <p className="navLink">home</p>
                        </NavLink>

                        <div className="dropdown">
                            <p className="navLink">experiences</p>
                            <div className="dropdownContent">
                                {
                                    experiences.map((experience, index) => {
                                        return <NavLink to={experience.route}>
                                            <p className="dropdownLink" key={index}>{experience.content.header}</p>
                                        </NavLink>
                                    })
                                }
                            </div>
                        </div>

                        <div className="dropdown">
                            <p className="navLink">projects</p>
                            <div className="dropdownContent">
                                {
                                    projects.map((project, index) => {
                                        return <NavLink to={project.route}>
                                            <p className="dropdownLink" key={index}>{project.content.header}</p>
                                        </NavLink>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="routerContent">
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
                    </div>
                </div >
            </HashRouter>
        );
    }
}

export default App;
