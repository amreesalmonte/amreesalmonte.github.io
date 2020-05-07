import React, { Component } from "react";
import projectsData from "./data/projects";
import Content from "./components/Content"

const projects = projectsData;

class App extends Component {
    render() {
        return (
            <div>
                {projects.map((project) => <Content key={project.id} content={project} />)}
            </div>
        );
    }
}

export default App;
