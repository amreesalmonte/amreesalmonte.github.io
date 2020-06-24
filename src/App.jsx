import React, { Component } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Intro from "./components/Intro";
import Page from "./components/Page";
import Experience from "./data/Experience";
import Projects from "./data/Projects";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="navBar">
            <NavLink exact activeStyle={{ color: "#7000FF" }} to="/">home</NavLink>
            <NavLink exact activeStyle={{ color: "#7000FF" }} to="/experience">experience</NavLink>
            <NavLink exact activeStyle={{ color: "#7000FF" }} to="/projects">projects</NavLink>
          </div>
        </div>
        <Switch>
          <div className="content">
            <Route exact path="/"><Intro /></Route>
            <Route exact path="/experience"><Page page={Experience} /></Route>
            <Route exact path="/projects"><Page page={Projects} /></Route>
          </div>
        </Switch>
        <Footer />
      </HashRouter >
    );
  }
}

export default App;
