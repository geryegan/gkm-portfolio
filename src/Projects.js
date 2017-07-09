import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
import Project from './Project';

const projects = [
  {
    title: 'Steps 160',
    description: 'BLablablablablabla'
  },
  {
    title: 'Nomad',
    description: 'BLablablablablabla'
  },
  {
    title: 'GoalTracker',
    description: 'BLablablablablabla'
  },
  {
    title: 'Bakpak',
    description: 'BLablablablablabla'
  },
];

class ProjectsComponent extends Component {
  renderProjects() {
    return projects.map(({ title, description }) => (
      <li>
        <Project title={title} description={description}/>
      </li>
      )
    );
  }

  render() {
    return (
      <div className="page">
        <h1>Projects</h1>
        <ul>{this.renderProjects()}</ul>
      </div>
    );
  }
}

const Projects = AnimatedWrapper(ProjectsComponent);
export default Projects;
