import React, { Component } from "react";
import projectsData from "./data/projects";
import Page from "./components/Page"

const projects = projectsData;

class App extends Component {
    render() {
        return (
            < div >
                {projects.map((project) => <Page key={project.id} page={project} />)}
            </div >
        );
    }
}

export default App;
